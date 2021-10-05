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
  background-color: var(--elements);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  transition: all 0.5s;
`;

export const Input = styled.input`
  // ### Theme
  color: var(--text);
  background-color: var(--elements);
  transition: all 0.5s;
  border-radius: 10px;
  padding: 1.2rem 0rem;
  border: none;
  outline: 0;
  font-size: 1.1rem;
  flex: 1;
`;

export const Icon = styled.img`
  width: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
