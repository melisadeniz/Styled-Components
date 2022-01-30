import { Nav, HeaderStyled, Logo } from "../../StyledComponents/NavbarStyled"
import { Button } from "../../StyledComponents/ButtonStyled"


function Navbar() {

  return (
       <HeaderStyled>
       <Nav>
       <Logo src='./beerlogo.png' alt='...'/>
       <h1>PUNK API</h1>
       </Nav>    
      </HeaderStyled>
  )
}

export default Navbar