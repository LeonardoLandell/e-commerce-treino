"use client";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(200, 200, 200, 0.5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  padding: 24px;
  margin-top: 48px;

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 14px;
  }
`;

const Text = styled.p`
  margin: 4px 0;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Text>
        <strong>Compra Segura | Troca Fácil | Suporte ao Cliente</strong>
      </Text>
      <Text>Contato | Política de Privacidade | Termos de Uso</Text>
      <Text style={{ fontSize: "14px" }}>© 2026 Sua Loja Online</Text>
    </FooterWrapper>
  );
}
