"use client";
import styled from "styled-components";

const maisVendidos = [
  {
    image: "/mais-vend/acessF.png",
    title: "Kit Acessórios Feminnos",
    price: "R$ 299,90",
  },
  {
    image: "/mais-vend/perflux.png",
    title: "Perfumo Juam Perfum",
    price: "R$ 399,90",
  },
  {
    image: "/mais-vend/acesM.png",
    title: "Kit Acessórios Masculino",
    price: "R$ 299,90",
  },
];

const novidades = [
  {
    image: "/mais-vend/camisastest.png",
    title: "Novas Camisas Texturizadas",
    price: "R$ 199,90",
  },
  { image: "/mais-vend/saiamid.png", title: "Saia Midi", price: "R$ 179,90" },
  {
    image: "/mais-vend/ternocomp.png",
    title: "Terno completo elegante",
    price: "R$ 849,90",
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

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  /* linha divisória vertical entre colunas */
  & > div:first-child {
    border-right: 2px solid rgba(200, 200, 200, 0.3);
    padding-right: 16px;
  }
  & > div:last-child {
    padding-left: 16px;
  }

  @media (max-width: 768px) {
    & > div:first-child {
      border-right: none;
      padding-right: 0;
    }
    & > div:last-child {
      padding-left: 0;
    }
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;

const ProductCard = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(80, 80, 80, 0.4); /* cinza translúcido */
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 160px; /* compacto */
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

const ProductImage = styled.div<{ bg: string }>`
  width: 100%;
  height: 120px;
  background: url(${({ bg }) => bg}) center/cover no-repeat;
`;

const ProductInfo = styled.div`
  padding: 10px;
  text-align: center;
  color: #fff; /* texto branco para contraste */
`;

const ProductTitle = styled.h3`
  font-size: 13px;
  margin: 0 0 6px;
`;

const ProductPrice = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #ffcccc; /* tom claro para destacar no fundo cinza */
  margin: 0 0 8px;
`;

const ProductButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.3s;
  &:hover {
    background: #cc0000;
  }
`;

export default function MaisVendidosENovidades() {
  return (
    <SectionWrapper>
      <SectionDivider />
      <TwoColumns>
        <div>
          <h3
            style={{ textAlign: "center", marginBottom: "16px", color: "#333" }}
          >
            Novidades
          </h3>
          <ProductGrid>
            {novidades.map((prod, i) => (
              <ProductCard key={i}>
                <ProductImage bg={prod.image} />
                <ProductInfo>
                  <ProductTitle>{prod.title}</ProductTitle>
                  <ProductPrice>{prod.price}</ProductPrice>
                  <ProductButton>Comprar</ProductButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </div>
        <div>
          <h3
            style={{ textAlign: "center", marginBottom: "16px", color: "#333" }}
          >
            Mais Vendidos
          </h3>
          <ProductGrid>
            {maisVendidos.map((prod, i) => (
              <ProductCard key={i}>
                <ProductImage bg={prod.image} />
                <ProductInfo>
                  <ProductTitle>{prod.title}</ProductTitle>
                  <ProductPrice>{prod.price}</ProductPrice>
                  <ProductButton>Comprar</ProductButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </div>
      </TwoColumns>
    </SectionWrapper>
  );
}
