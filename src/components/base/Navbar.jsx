import { Logo,  Nav, HeaderStyled } from "../../StyledComponents/NavbarStyled"
import ChangeThemeButton from "../ChangeThemeButton"


function Navbar() {

  return (
       <HeaderStyled>
       <Nav>
      
       <Logo src='./homelogo.png' alt='...'/>
       <h1>HOME</h1>

       <div>
       <ChangeThemeButton/>
       </div>
       </Nav>    
       </HeaderStyled>
  )
}

export default Navbar