interface MangaImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface MangaTitle {
  type: string;
  title: string;
}

interface PublishedDate {
  from: string;
  to: string | null;
  prop: {
    from: {
      day: number;
      month: number;
      year: number;
    };
    to: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
  string: string;
}

interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Serialization {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface RelationEntry {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface ExternalLink {
  name: string;
  url: string;
}

interface MangaData {
  pagination?: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: Data[];
}

interface Data {
  mal_id: number;
  url: string;
  images: {
    jpg: MangaImage;
    webp: MangaImage;
  };
  approved: boolean;
  titles: MangaTitle[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  published: PublishedDate;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: any[]; // Assuming it's an array, you may need to define its type
  themes: Theme[];
  demographics: Demographic[];
  relations?: {
    relation: string;
    entry: RelationEntry[];
  }[];
  external?: ExternalLink[];
}

export default MangaData;
