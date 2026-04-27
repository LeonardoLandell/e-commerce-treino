"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../app/styles/GlobalStyle";
import { lightTheme, darkTheme } from "../app/styles/Themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Header dark={dark} toggleTheme={() => setDark(!dark)} />
          {/* padding-top garante que nada fique escondido atrás da nav */}
          <main style={{ paddingTop: "100px", paddingInline: "16px" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
