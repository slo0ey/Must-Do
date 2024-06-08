import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
`

export const HeaderTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-decoration: none;
  color: white;
`;

export const HeaderSubTitle = styled.p`
  margin-top: -1.2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`