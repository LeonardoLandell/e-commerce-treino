"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const banners = [
  {
    image: "/banner/bannerR.png",
    title: "OFERTA RELÂMPAGO",
    subtitle: "Descontos Imperdíveis!",
    time: 2 * 3600 + 15 * 60 + 32,
  },
  {
    image: "/banner/bannerup.png",
    title: "FIM DE ESTOQUE",
    subtitle: "Últimas unidades disponíveis!",
    time: 1 * 3600 + 5 * 60,
  },
  {
    image: "/banner/bannernov.png",
    title: "NOVIDADES",
    subtitle: "Confira os lançamentos!",
    time: 0,
  },
];

const BannerWrapper = styled.section<{ bg: string }>`
  position: relative;
  width: 100%;
  max-width: 1200px; /* largura máxima alinhada ao layout */
  height: 280px; /* altura compacta e proporcional */
  margin: 0 auto 32px;
  border-radius: 12px;
  overflow: hidden;

  /* imagem de fundo sempre proporcional */
  background-image: url(${({ bg }) => bg});
  background-position: center; /* centraliza o foco */
  background-repeat: no-repeat;
  background-size: cover; /* cobre todo o card sem distorcer */

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  transition: background 0.8s ease;

  @media (max-width: 768px) {
    height: 200px; /* reduz altura em telas menores */
    padding: 16px;
  }
`;

const Card = styled.div`
  backdrop-filter: blur(6px);
  background: rgba(50, 50, 50, 0.4); /* cinza translúcido */
  border-radius: 12px;
  padding: 24px 32px;
  z-index: 2;
  max-width: 80%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 95%;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Timer = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 12px 0;
`;

const Button = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  &:hover {
    background: #cc0000;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const ArrowLeft = styled(Arrow)`
  left: 16px;
`;

const ArrowRight = styled(Arrow)`
  right: 16px;
`;

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(banners[0].time);

  // troca automática a cada 8 segundos
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(autoSlide);
  }, []);

  // contador regressivo
  useEffect(() => {
    setTimeLeft(banners[index].time);
  }, [index]);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <BannerWrapper bg={banners[index].image}>
      <ArrowLeft
        onClick={() => setIndex((index - 1 + banners.length) % banners.length)}
      >
        {"<"}
      </ArrowLeft>
      <Card>
        <Title>{banners[index].title}</Title>
        <Subtitle>{banners[index].subtitle}</Subtitle>
        {banners[index].time > 0 && <Timer>{formatTime(timeLeft)}</Timer>}
        <Button>Compre Agora</Button>
      </Card>
      <ArrowRight onClick={() => setIndex((index + 1) % banners.length)}>
        {">"}
      </ArrowRight>
    </BannerWrapper>
  );
}
