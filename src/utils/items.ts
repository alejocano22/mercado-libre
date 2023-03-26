import { ItemI, DetailedItemI } from '@/utils/customTypes/Item';

export const toItem = (item: any): ItemI => {
  return {
    id: item.id,
    author: item.seller.nickname,
    title: item.title,
    price: item.price,
  };
}

export const toItems = (data: any): ItemI[] => {
  let mappedItems: ItemI[] = [];
  data?.results.map((item: any) => mappedItems.push(toItem(item)));
  return mappedItems;
};


export const toDetailedItem = (item: any, description: any): DetailedItemI => {
  return {
    id: item.id,
    author: item.site_id,
    title: item.title,
    price: item.price,
    description: description.plain_text,
  };
};