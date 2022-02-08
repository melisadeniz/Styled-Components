import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({theme}) => theme.NavColor};
  display: flex;
  padding: 20px;
  align-items: ;
  @media(max-width: 765px ){
    flex-direction: column;
  }
  h1 {
  color: white;
  margin: 10px 20px;
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