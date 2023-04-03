import ProductListScreen from '@/screens/ProductListScreen';
import { getItemsList } from '@/services/items';

export async function getServerSideProps(context: any) {
  const search = context.query?.search || '';
  const response = await getItemsList(search);

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
