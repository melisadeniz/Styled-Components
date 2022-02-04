import styled from "styled-components";
import { padding } from "./mainCss";


const TextStyled = styled.div`
text-align: center;
${padding};
color: ${({ theme }) => theme.TextColor};
`

export {TextStyled}