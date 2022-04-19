import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar({ ...props }: SearchBarProps) {
  return (
    <Wrapper>
      <Icon />
      <Input {...props} aria-label='search' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  color: var(--text);
  background-color: var(--elements);
  box-shadow: var(--box-shadow);
  min-width: 20rem;
  font-size: 1.1rem;
  border: none;
  outline: 0;
  border-radius: 0.6rem;
  padding: 1.2rem 0rem 1.2rem 3rem;
  transition: background-color 0.3s;
`;
