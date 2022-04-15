import { Header } from '../components';
import BrowserLayout from '../layouts/Browser';
import CountriesListLayout from '../layouts/CountriesList';

export default function Home() {
  return (
    <>
      <Header />
      <BrowserLayout />
      <CountriesListLayout />
    </>
  );
}
