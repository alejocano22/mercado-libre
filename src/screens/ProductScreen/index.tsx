import { DetailedItemI } from '@/utils/customTypes/Item';
import styles from './ProductScreen.module.css';

const ProductScreen = ({
  id, title, author, price, picture, description
}: DetailedItemI) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productCard}>
        <div className={styles.mainProductSection}>
          <img
            src={picture}
            alt='product image'
            className={styles.productImage}
          />
          <div className={styles.productDescriptionContainer}>
            <h3 className={styles.productDescriptionTitle}>
              Descripción del producto
            </h3>
            <p className={styles.productDescription}>{description}</p>
          </div>
        </div>
        <div className={styles.secondaryProductSection}>
          <p className={styles.productLabel}>{author}</p>
          <p className={styles.productTitle}>{title}</p>
          <p className={styles.productPrice}>$ {price}</p>
          <button className={styles.productBuyButton}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
