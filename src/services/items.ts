import { DetailedItemResponseI, ItemsResponseI } from '@/customTypes/Response';

export const getDetailedItem = async (id: string): Promise<DetailedItemResponseI> => {
  return await fetch(`${process.env.ENVIRONMENT}/api/items/${id}/`).then(
    (res) => res.json()
  );
};

export const getItemsList = async (search: string): Promise<ItemsResponseI> => {
  return await fetch(`${process.env.ENVIRONMENT}/api/items?q=${search}`).then(
    (res) => res.json()
  );
};
