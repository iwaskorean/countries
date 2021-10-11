export interface Country {
  altSpellings: string[] | string;
  area: number;
  capital: null | string[] | string;
  cca2: string;
  cca3: string;
  ccn3: string;
  demonyms: Object;
  flag: string;
  flags: string | string[];
  idd: null | object;
  independent: boolean;
  landlocked: boolean;
  latlng: number[];
  name: {
    common: string;
    official: string;
  };
  region: string;
  status: string;
  tld: string[] | string | null;
  translations: object;
  unMember: boolean;
}
