import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // ### Theme
  background-color: var(--light-elements);
  box-shadow: var(--light-box-shadow);
  border-radius: 10px;
  transition: all 0.5s;
`;

export const Icon = styled.img`
  width: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  // ### Theme
  color: var(--light-text);
  background-color: var(--light-elements);
  transition: all 0.5s;
  flex: 1;
  border-radius: 10px;
  padding: 1.2rem 0rem;
  border: none;
  outline: 0;
  font-size: 1.1rem;
`;
