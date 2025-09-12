export interface Character {
  id: number;
  name: string;
  status: string | null;
  species: string | null;
  type: string | null;
  gender: string | null;
  origin: string[];
  location: location;
  image: string | null;
  episode: string[];
  url: string;
  created: string;
}

type location = {
  name: string;
  url: string;
};
