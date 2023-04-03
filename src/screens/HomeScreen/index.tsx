import { Paragraph } from '@/components/texts';
import ProductListScreen from '../ProductListScreen';
import styles from './HomeScreen.module.css';
import { getHighlightedProducts } from '@/utils/utils';

const HomeScreen = () => {
  const items = getHighlightedProducts();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Paragraph text='Productos Destacados:' size='default' />
        </div>
      </div>
      <ProductListScreen items={items}></ProductListScreen>
    </>
  );
};

export default HomeScreen;
