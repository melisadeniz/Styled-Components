import { ThemeProvider } from 'styled-components';
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import Home from "./components/Home";

function App() {

  const theme = {
    colors: {
      header: '#004422',
      body: '#004422',
      footer: '#004422',
    },
    mobile: '768px',
  }

  return (
    <ThemeProvider theme={theme}>
    <>
     <Navbar />
     
     <Home />

     <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
