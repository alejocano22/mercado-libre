import { ItemI, DetailedItemI } from '@/utils/customTypes/Item';

export const toItem = (item: any): ItemI => {
  return {
    id: item.id,
    author: item.seller.nickname,
    title: item.title,
    price: item.price,
    picture: item.thumbnail,
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
    picture: item.pictures[0].url,
    description: description.plain_text,
  };
};