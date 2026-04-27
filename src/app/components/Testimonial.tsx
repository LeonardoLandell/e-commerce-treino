"use client";
import styled, { keyframes } from "styled-components";

const testimonials = [
  {
    name: "Maria",
    text: "Adorei a qualidade das roupas e o atendimento impecável!",
    rating: 5,
  },
  {
    name: "João",
    text: "Entrega rápida e produtos excelentes. Recomendo!",
    rating: 4,
  },
  {
    name: "Ana",
    text: "Ótima experiência de compra, voltarei sempre!",
    rating: 5,
  },
];

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;
`;

const SectionDivider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(to right, #ff4444, #cc0000);
  margin: 0 auto 32px;
  max-width: 100%;
  border-radius: 2px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #ff4444;
    margin: 8px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const TestimonialCard = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(80, 80, 80, 0.4);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  color: #fff;
  max-width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const Star = styled.span`
  font-size: 18px;
  color: #ffd700; /* dourado */
  animation: ${pulse} 2s infinite ease-in-out;
`;

export default function Testimonials() {
  return (
    <SectionWrapper>
      <SectionDivider />
      <SectionTitle>Depoimentos</SectionTitle>
      <TestimonialGrid>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i}>
            <Name>{t.name}</Name>
            <Text>{t.text}</Text>
            <Stars>
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j}>★</Star>
              ))}
            </Stars>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </SectionWrapper>
  );
}
