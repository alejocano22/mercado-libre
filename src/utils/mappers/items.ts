import { ItemI, DetailedItemI } from '@/customTypes/Item';
import { getDecimals } from '../utils';

export const toItem = (item: any): ItemI => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: getDecimals(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    freeShipping: item.shipping?.free_shipping,
    city: item.seller_address?.city?.name,
  };
}

export const toItems = (items: any): ItemI[] => {
  return items?.map((item: any) => toItem(item));
};


export const toDetailedItem = (item: any, description: any): DetailedItemI => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: getDecimals(item.price),
    },
    picture: item.pictures[0]?.url,
    condition: item.condition,
    freeShipping: item.shipping?.free_shipping,
    description: description.plain_text,
    soldQuantity: item.sold_quantity,
    link: item.permalink,
    city: item.seller_address?.city?.name,
  };
};

export const getCategories = (filters: any): string[] => {
  let categories: string[] = [];
  const category = filters?.find((filter: any) => filter.id === 'category');
  category?.values.forEach((value: any) => categories.push(value.name));
  return categories;
}
