import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Frame from '../Layout/Frame';

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  thumbnail: string;
  details?: {}[];
}

export default function Card({
  children,
  thumbnail,
  details,
  ...props
}: CardProps) {
  return (
    <Wrapper {...props}>
      <Thumbnail src={thumbnail} alt='flag' />
      <Frame style={{ padding: '1rem', overflowY: 'scroll' }}>
        <Title>{children}</Title>
        {details?.map((detail, i) => (
          <Text key={i}>
            {`${Object.keys(detail)}: ${Object.values(detail)[0] || '-'}`}
          </Text>
        ))}
      </Frame>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 16rem;
  height: 23rem;
  background-color: var(--elements);
  padding-bottom: 2rem;
  border-radius: 0.6rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  overflow: hidden;
  justify-self: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: var(--text);
  font-size: 1.8rem;
  margin: 0.5rem 0;
  line-height: 1.8rem;
`;

const Text = styled.p`
  color: var(--text);
  font-size: 1rem;
  margin: 0.3rem 0;
`;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 8.5rem;
  object-fit: cover;
`;
