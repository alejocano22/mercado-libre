import ProductScreen from '@/screens/ProductScreen';
import { DetailedItemI } from '@/customTypes/Item';
import { getDetailedItem } from '@/services/items';

export async function getServerSideProps(context: { query: { id: string; }; }) {
  const { id } = context.query;
  const response = await getDetailedItem(id);
  return {
    props: {
      ...response.item
    },
  };
}

const DetailedItem = (props: DetailedItemI) => {
  return <ProductScreen {...props}></ProductScreen>;
};

export default DetailedItem;
