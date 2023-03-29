import ProductListScreen from '@/screens/ProductListScreen';
import { ItemI } from '@/customTypes/Item';
import { useEffect } from 'react';

export async function getServerSideProps(context: any) {
  const search = context.query?.search || '';
  const response = await fetch(
    `${process.env.ENVIRONMENT}/api/items?q=${search}`
  ).then((res) => res.json());
  
  return {
    props: {
      items: response.items,
    },
  };
}

const Items = ({ items }: any) => {
  return <ProductListScreen items={items}></ProductListScreen>;
};

export default Items;
