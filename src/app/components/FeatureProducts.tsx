"use client";
import styled from "styled-components";

const products = [
  {
    image: "/destaque/poloD.png",
    title: "Coleção polo",
    text: "A partir de:",
    price: "R$ 199,90",
  },
  {
    image: "/destaque/vestidosD.png",
    title: "Coleção deVestidos de Luxo",
    price: "R$ 349,90",
  },
  {
    image: "/destaque/InfantilD.png",
    title: "Conjunto Infantil Masculino",
    price: "R$ 129,90",
  },
  {
    image: "/destaque/InfantilDF.png",
    title: "Conjunto infantil Feminino",
    price: "R$ 249,90",
  },
];

const SectionDivider = styled.hr`
  border: none;
  height: 3px;
  background: linear-gradient(to right, #ff4444, #cc0000);
  margin: 40px auto;
  max-width: 1200px;
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

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const ProductCard = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(80, 80, 80, 0.4); /* cinza translúcido */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
  height: 220px;
  background: url(${({ bg }) => bg}) center/cover no-repeat;
`;

const ProductInfo = styled.div`
  padding: 16px;
  text-align: center;
  color: #fff; /* texto branco para contraste */
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ffcccc; /* tom claro para destacar no fundo cinza */
  margin: 0 0 12px;
`;

const ProductButton = styled.button`
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

export default function FeaturedProducts() {
  return (
    <>
      <SectionDivider />
      <SectionTitle>Produtos em Destaque</SectionTitle>
      <ProductGrid>
        {products.map((prod, i) => (
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
    </>
  );
}
