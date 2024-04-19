export interface ICard {
  id: string;
  url: string;
  liked: boolean;
}

export interface ICardById {
  id: string;
  url: string;
  breeds?: [];
  liked?: boolean;
}
