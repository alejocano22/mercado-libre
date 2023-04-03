import styles from './Price.module.css';

export interface PriceProps {
  price: number;
  size: 'small' | 'default';
}

const Price = ({ price, size }: PriceProps) => {
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const getPriceSize = (size: string) => {
    const sizes: any = {
      small: 'priceSmall',
      default: 'priceDefaultSize',
    };
    return sizes[size] || sizes['default'];
  }

  const getPriceDecimalSize = (size: string) => {
    const sizes: any = {
      small: 'decimalSmall',
      default: 'decimalDefaultSize',
    };
    return sizes[size] || sizes['default'];
  };

  return (
    <div className={styles.priceContainer}>
      <span className={`${styles.price} ${styles[getPriceSize(size)]}`}>
        $ {formattedPrice.split('.')[0].replace(',', '.')}
      </span>
      <span className={`${styles.decimal} ${styles[getPriceDecimalSize(size)]}`}>
        {formattedPrice.split('.')[1]}
      </span>
    </div>
  );
};

export default Price;
