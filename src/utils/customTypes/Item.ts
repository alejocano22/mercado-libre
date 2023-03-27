
export interface ItemI {
  id: string;
  author: string;
  title: string;
  price: number;
  picture: string;
}

export interface DetailedItemI extends ItemI {
  description: string;
}