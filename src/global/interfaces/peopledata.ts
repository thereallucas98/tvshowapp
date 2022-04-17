import { ImageData } from "./tvshowdata";

export interface PeopleDataResponse {
  id: number;
  url: string;
  name: string;
  birthday: string;
  gender: "Male" | "Female";
  image: ImageData;
}

export interface TVShowSearchDataResponse {
  person: PeopleDataResponse;
}

export interface CountryData {
  name: string;
  code: string;
}

export interface TVPeopleIndexDataResponse extends PeopleDataResponse {
  country: CountryData;
}

export interface ShowData {
  id: number;
  url: string;
  name: string;
  image: ImageData;
}

export interface EmbeddedData {
  show: ShowData;
}

export interface ShowsByPeopleIndex {
  _embedded: EmbeddedData;
}
