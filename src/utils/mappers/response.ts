import { DetailedItemResponseI, ItemsResponseI } from '@/customTypes/Response';
import { getCategories, toDetailedItem, toItems } from './items';

export const toItemsResponse = (data: any): ItemsResponseI => {
  return {
    author: {
      name: process.env.AUTHOR_NAME || 'unknown',
      lastName: process.env.AUTHOR_LAST_NAME || 'unknown',
    },
    categories: getCategories(data.filters),
    items: toItems(data.results),
  };
};

export const toDetailedItemResponse = (data: any, description: string): DetailedItemResponseI => {
  return {
    author: {
      name: process.env.AUTHOR_NAME || 'unknown',
      lastName: process.env.AUTHOR_LAST_NAME || 'unknown',
    },
    item: toDetailedItem(data, description),
  };
};
