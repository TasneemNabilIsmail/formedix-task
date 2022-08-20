export interface FlickerPhoto {
  url?: string;
  farm: string;
  id: string;
  secret: string;
  owner: string;
  server: string;
  title: string;
}

export interface FlickerOutput {
  photos: {
    photo: FlickerPhoto[];
    page: number;
    pages: number;
    perpage: number;
    total: number;
  };
  stat: string;
}
