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

export interface TVShowSearchDataResponse {
  show: TVShowsDataResponse;
}

export interface ScheduleData {
  time: string;
  days: string[];
}

export interface RatingData {
  average: number;
}

export interface TVShowByIndexData extends TVShowsDataResponse {
  schedule: ScheduleData;
  rating: RatingData;
  summary: string;
}

export interface EpisodeData {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  runtime: string;
  rating: RatingData;
  image: ImageData;
  summary: string;
}

export interface SeasonData {
  season: number;
  episodes: EpisodeData[];
}
