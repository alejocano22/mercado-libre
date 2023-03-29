import { DetailedItemI } from '@/customTypes/Item';
import styles from './ProductScreen.module.css';

const ProductScreen = ({
  id, title, price, picture, description
}: DetailedItemI) => {
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
            <h3 className={styles.productDescriptionTitle}>
              Descripción del producto
            </h3>
            <p className={styles.productDescription}>{description}</p>
          </div>
        </div>
        <div className={styles.secondaryProductSection}>
          <p className={styles.productTitle}>{title}</p>
          <p className={styles.productPrice}>$ {price.amount}</p>
          <button className={styles.productBuyButton}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
