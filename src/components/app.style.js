// Importando o styled-components para a variável styled 
import styled from "styled-components";

//Estilização do componente AppContainer
export const AppContainer = styled.div`
  height: 37vh;
  display: flex;
  justify-content: center;
  padding: 300px;

// Abaixo passamos para as propriedades background-color e color
// as configurações de estilo definidas no arquivo
// theme.js e compartilhada pela props theme do componente <ThemeProvider>

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
`;

//Estilização do componente MainSection
export const MainSection = styled.div`
text-align: center;
    .modal-overlay{
    background-color: green;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-header{
    display: flex;
}

.modal-content{
    width: 90%;
    max-width: 500px;
    background-color: blue;
    padding: 10px;
    border-radius: 5px;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

