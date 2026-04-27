"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const mockSuggestions = ["Produto A", "Produto B", "Produto C", "Produto D"];

const HeaderWrapper = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(200, 200, 200, 0.5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 50;
  transition: opacity 0.5s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 8px 0 0 8px;
  background: rgba(255, 255, 255, 0.7);
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px #4a90e2;
  }
`;

const SearchButton = styled.button`
  border: 1px solid #ccc;
  border-left: none;
  padding: 8px 12px;
  border-radius: 0 8px 8px 0;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #f0f0f0;
  }
`;

const Suggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s;
    &:hover {
      color: #4a90e2;
    }
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

// ✅ Ajuste aqui: tipagem correta das props
type HeaderProps = {
  dark: boolean;
  toggleTheme: () => void;
};

export default function Header({ dark, toggleTheme }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction > 5000) {
        setVisible(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastInteraction]);

  const handleInteraction = () => {
    setLastInteraction(Date.now());
    setVisible(true);
  };

  useEffect(() => {
    if (query.length > 0) {
      setFiltered(
        mockSuggestions.filter((s) =>
          s.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    } else {
      setFiltered([]);
    }
  }, [query]);

  const handleSearch = () => {
    alert(`Buscando por: ${query}`);
  };

  return (
    <HeaderWrapper
      visible={visible}
      onMouseEnter={handleInteraction}
      onMouseMove={handleInteraction}
      onClick={handleInteraction}
    >
      <Content>
        <Image
          src="/images/logo.png"
          alt="Logo da Loja"
          width={40}
          height={40}
        />

        <SearchBox>
          <Input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>🔍</SearchButton>
          {filtered.length > 0 && (
            <Suggestions>
              {filtered.map((item, i) => (
                <SuggestionItem
                  key={i}
                  onClick={() => {
                    setQuery(item);
                    setFiltered([]);
                  }}
                >
                  {item}
                </SuggestionItem>
              ))}
            </Suggestions>
          )}
        </SearchBox>

        <Nav>
          <button>🛒</button>
          <button>❤️</button>
          {/* ✅ Agora o Header sabe lidar com dark */}
          <button onClick={toggleTheme}>{dark ? "☀️" : "🌙"}</button>
        </Nav>
      </Content>
    </HeaderWrapper>
  );
}
