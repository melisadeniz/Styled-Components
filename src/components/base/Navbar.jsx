import { Logo,  Nav } from "../../StyledComponents/NavbarStyled"
import ChangeThemeButton from "../ChangeThemeButton"


function Navbar() {

  return (
      
       <Nav>
    
       <Logo src='./homelogo.png' alt='...'/>
       <h1>HOME</h1>
    
       <ChangeThemeButton/>
   
       </Nav>    
  
  )
}

export default Navbar