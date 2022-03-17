declare type T150Event = {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  Title: string;
  Description: string;
  Date: null;
  Link: string;
  Nimi: string;
  Kuvaus: string;
  Teekkarius150: true;
  StartDate: string;
  EndDate: string;
  Organizer: string;
};

declare type InstagramPost = {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
};

declare type Person = {
  name: string;
  fi: string;
  en: string;
  email?: string;
};
