import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: 20px 0 40px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  
  @media (max-width: 765px) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: 765px) {
    flex-direction: column;
    text-align: center;
  }
`