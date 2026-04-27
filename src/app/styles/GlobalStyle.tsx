"use client";
import { createGlobalStyle } from "styled-components";

// Extensão do tipo DefaultTheme para incluir background e foreground
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    foreground: string;
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    font-family: Arial, Helvetica, sans-serif;
    transition: background 0.5s ease, color 0.5s ease;
  }
`;
