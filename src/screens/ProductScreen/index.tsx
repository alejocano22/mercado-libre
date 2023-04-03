import { DetailedItemI } from '@/customTypes/Item';
import styles from './ProductScreen.module.css';
import { MainButton } from '@/components/buttons';
import { Paragraph, Price, Title, Subtitle } from '@/components/texts';

const ProductScreen = ({
  condition,
  description,
  id,
  link,
  picture,
  price,
  soldQuantity,
  title,
}: DetailedItemI) => {
  const handleOnClick = () => {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productCard}>
        <div className={styles.mainProductSection}>
          <div className={styles.productImageContainer}>
            <img
              src={picture}
              alt='product image'
              className={styles.productImage}
            />
          </div>
          <div className={styles.productDescriptionContainer}>
            <Subtitle hierarchy='h4' text='Descripción del producto' />
            <Paragraph text={description} size='default' />
          </div>
        </div>
        <div className={styles.secondaryProductSection}>
          <Subtitle
            hierarchy='h2'
            text={`${condition} - ${soldQuantity} vendidos`}
          />
          <Title text={title} />
          <Price price={price.amount} size='default'></Price>
          <MainButton color='blue' text='Comprar' onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
