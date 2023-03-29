export interface ItemI {
  id: string;
  title: string;
  price: PriceI;
  picture: string;
  condition: string;
  freeShipping: boolean;
}

export interface PriceI {
  currency: string;
  amount: number;
  decimals: number;
}


export interface DetailedItemI extends ItemI {
  description: string;
  soldQuantity: string;
}
