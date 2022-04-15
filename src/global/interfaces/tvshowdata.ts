export interface ImageData {
  medium: string;
  original: string;
}

export interface TVShowsDataResponse {
  id: number;
  url: string;
  name: string;
  genres: string[];
  status: string;
  image: ImageData;
  averageRuntime: number;
}
