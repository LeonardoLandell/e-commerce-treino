"use client";
import { createGlobalStyle } from "styled-components";

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
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.sm}) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    html {
      font-size: 14px;
    }
  }
`;
