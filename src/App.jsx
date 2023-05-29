import { useCallback, useState } from "react";
import { AppContainer, MainSection } from "./components/app.style";
import { css, ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/button.style";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

export function App() {
  // useState que armazena o tema atual da aplicação
  const [currentTheme, setCurrentTheme] = useState("light");
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  // variável que armazena o text do tema que não
  // está sendo usado no momento, para personalizar o texto do botão
  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
    // <ThemeProvider> é o componente auxiliar da biblioteca
    // styled-components que prove as informações do tema atual
    // atraves da pros theme para todos componentes que estão dentro dele.
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            switch to {getOpositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}
