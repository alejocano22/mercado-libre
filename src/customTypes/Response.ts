import { ItemI } from './Item';

export interface AuthorI {
  name: string;
  lastName: string;
}

export interface ItemsResponseI {
  author: AuthorI;
  categories?: string[];
  items: ItemI[];
}

export interface DetailedItemResponseI {
  author: AuthorI;
  item: ItemI;
}
