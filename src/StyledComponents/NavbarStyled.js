import styled from "styled-components";

export const HeaderStyled = styled.header` 
  padding: 20px 10px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 5px; 
  @media(max-width: 765px ){
    flex-direction: column;
  }
  h1 {
  color: white;
  margin-left: 20px;
  font-family: monospace;
  font-size: xx-large;
}
`
export const Logo = styled.img`
  width: 70px;
  margin-left: 10px;
  @media (max-width: 765px) {
    margin: 40px 0 30px;
  }
`