import styled from "styled-components";

export const Button = styled.button`
  background-color:${({theme}) => theme.ButtonColor} ;
  border-radius: 50px;
  border: none;
  box-shadow:   px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  `

  