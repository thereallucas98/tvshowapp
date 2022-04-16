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
