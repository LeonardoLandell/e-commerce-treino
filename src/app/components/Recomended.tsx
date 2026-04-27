"use client";
import styled from "styled-components";

const suggestions = [
  { image: "/looks/looktrab.png", title: "Looks para o Trabalho" },
  { image: "/looks/lookscasuais.png", title: "Moda Casual" },
  { image: "/looks/lookesportivo.png", title: "Estilo Esportivo" },
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

const SuggestionGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SuggestionCard = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(80, 80, 80, 0.4); /* cinza translúcido */
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* efeito zoom in */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

const SuggestionImage = styled.div<{ bg: string }>`
  width: 100%;
  height: 140px;
  background: url(${({ bg }) => bg}) center/cover no-repeat;
`;

const SuggestionInfo = styled.div`
  padding: 12px;
  text-align: center;
  color: #fff;
`;

const SuggestionTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`;

export default function Suggestions() {
  return (
    <SectionWrapper>
      <SectionDivider />
      <SectionTitle>Sugestões para Você</SectionTitle>
      <SuggestionGrid>
        {suggestions.map((sug, i) => (
          <SuggestionCard key={i}>
            <SuggestionImage bg={sug.image} />
            <SuggestionInfo>
              <SuggestionTitle>{sug.title}</SuggestionTitle>
            </SuggestionInfo>
          </SuggestionCard>
        ))}
      </SuggestionGrid>
    </SectionWrapper>
  );
}
