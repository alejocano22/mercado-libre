import router from 'next/router';
import styles from './ProductListScreen.module.css';
import { ItemI } from '@/customTypes/Item';
import { Paragraph, Price, Subtitle, Title } from '@/components/texts';
import { TruckIcon } from '@/components/icons';


const ProductListScreen = ({ items }: any) => {
  const handleOnClick = (id: string) => {
    router.push(`/items/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {!items.length ? (
          <Subtitle
            hierarchy='h2'
            text='No hay resultados para esta busqueda'
          />
        ) : (
          <>
            {items.map((item: ItemI, index: number) => (
              <div
                key={`item-${index}`}
                className={styles.card}
                onClick={() => handleOnClick(item.id)}
              >
                <img src={item.picture} alt='product thumbnail'></img>
                <div className={styles.description}>
                  <div className={styles.priceContainer}>
                    <Price price={item.price?.amount || 0} size='small'></Price>
                    {item.freeShipping ? (
                      <span className={styles.freeShipping}>
                        <TruckIcon />
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                  <Subtitle text={item.title} hierarchy={'h2'}></Subtitle>
                </div>
                <Paragraph text={item.city} size='small'></Paragraph>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListScreen;
