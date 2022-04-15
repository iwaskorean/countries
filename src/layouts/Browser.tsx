import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Dropdown, Form } from '../components';
import SearchBar from '../components/SearchBar/SearchBar';
import { REGIONS } from '../constants/regions';
import { RootState, setRegion, setPageNumber, setTerm } from '../store';

export default function BrowserLayout() {
  const { region } = useSelector((state: RootState) => state.region);
  const { term } = useSelector((state: RootState) => state.term);

  const [currentTerm, setCurrentTerm] = useState(term);

  const dispatch = useDispatch();

  const handleSelectRegion = (region: string) => {
    dispatch(setRegion(region));
    dispatch(setTerm(''));
    dispatch(setPageNumber(1));
  };

  const handleTerm = (term: string) => {
    dispatch(setTerm(term));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTerm(currentTerm);
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <SearchBar
          type='text'
          value={currentTerm}
          onChange={(e) => setCurrentTerm(e.target.value)}
        />
      </Form>
      <Dropdown
        label={region}
        items={Object.values(REGIONS)}
        handleSelectItem={handleSelectRegion}
      />
    </Layout>
  );
}

const Layout = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
