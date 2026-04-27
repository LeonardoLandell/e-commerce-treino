"use client";
import styled from "styled-components";

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

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(80, 80, 80, 0.4); /* cinza translúcido */
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* efeito zoom in */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-right: 8px;
  font-size: 14px;
`;

const Button = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #cc0000;
  }
`;

export default function CupomFrete() {
  return (
    <SectionWrapper>
      <SectionDivider />
      <TwoColumns>
        <Card>
          <Title>Adicionar Cupom</Title>
          <div>
            <Input type="text" placeholder="Digite seu cupom..." />
            <Button>Aplicar</Button>
          </div>
        </Card>
        <Card>
          <Title>Frete Grátis</Title>
          <p>Para todo o Brasil em compras acima de R$ 99,90</p>
          <div style={{ marginTop: "16px" }}>
            <Input type="text" placeholder="Digite seu CEP para calcular..." />
            <Button>Calcular</Button>
          </div>
        </Card>
      </TwoColumns>
    </SectionWrapper>
  );
}
