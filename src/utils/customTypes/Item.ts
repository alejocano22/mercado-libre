
export interface ItemI {
  id: string;
  author: string;
  title: string;
  price: number;
}

export interface DetailedItemI extends ItemI {
  description: string;
}