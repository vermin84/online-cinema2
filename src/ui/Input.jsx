import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid var(--pastel-green-300);
  background-color: var(--pastel-green-200);
  color: var(--pastel-green-800);
  border-radius: var(--border-radius-sm);

  box-shadow: var(--shadow-sm);
  font-size: 14px;
  padding: 0.4rem;
  min-width: 100%;
  @media (max-width: 770px) {
    font-size: 12px;
    padding: 0.2rem;
    width: 80%;
  }
`

export default Input
