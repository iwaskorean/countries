import { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import Label from './Label';

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  items: string[];
  handleSelectItem(value: string): void;
}

export default function Dropdown({
  label,
  items,
  handleSelectItem,
  ...props
}: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleItemClick = (item: string) => {
    handleSelectItem(item);
    setIsVisible(false);
  };

  return (
    <Wrapper {...props}>
      <LabelWrapper onClick={() => setIsVisible((prev) => !prev)}>
        <Label>{label}</Label>
        <Icon isVisible={isVisible} src='./assets/icon-arrow.png'></Icon>
      </LabelWrapper>
      <List isVisible={isVisible}>
        {items.map((item, i) => (
          <Item key={i} onClick={() => handleItemClick(item)}>
            {item}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 15rem;
  font-weight: $font-bold;
  color: var(--text);
  background-color: var(--elements);
  box-shadow: var(--box-shadow);
  border-radius: 0.6rem;
  position: relative;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.2rem;

  &:hover {
    opacity: 0.7;
  }
`;

const List = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 15rem;
  position: absolute;
  z-index: 1000;
  box-shadow: var(--box-shadow);
  background-color: var(--elements);
  list-style: none;
  top: 3.8rem;
  left: 0;
  padding: 0.3rem;
  border-radius: 0.6rem;
`;

const Icon = styled.img<{ isVisible: boolean }>`
  width: 1rem;
  transform: rotate(${({ isVisible }) => (isVisible ? '0deg' : '180deg')});
  transition: transform 0.1s;
`;

const Item = styled.li`
  padding: 0.7rem 0.5rem;
  & + & {
    border-top: 0.6px solid lightgray;
  }
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
