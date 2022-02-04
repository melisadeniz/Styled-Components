import { GlobalStyle } from "./StyledComponents/GlobalStyled";
import { styledComponentTheme } from "./StyledComponents/styledComponentTheme"
import { ThemeProvider } from 'styled-components';
import { ChangeThemeContext } from './context/ChangeThemeContext'
import { useContext } from "react";
import Home from "./components/Home"
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer"

function App() {

  const {themeName} = useContext(ChangeThemeContext)

  return (
    <ThemeProvider theme={styledComponentTheme[themeName]}>
      <GlobalStyle>
    <>
     <Navbar />
     
     <Home />

     <Footer />
    </>
    </GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
