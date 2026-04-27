"use client";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "../app/styles/Themes";
import Header from "../app/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado para alternar entre tema claro e escuro
  const [dark, setDark] = useState(false);

  return (
    <html lang="pt-BR">
      <body>
        {/* ThemeProvider aplica o tema global */}
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          {/* GlobalStyle aplica estilos globais */}
          <GlobalStyle />

          {/* Header recebe o estado atual e a função de alternância */}
          <Header dark={dark} toggleTheme={() => setDark(!dark)} />

          {/* Conteúdo principal com espaçamento para não ficar atrás do Header */}
          <main style={{ paddingTop: "100px", paddingInline: "16px" }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
