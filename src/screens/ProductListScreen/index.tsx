import router from 'next/router';
import styles from './ProductListScreen.module.css';

const ProductListScreen = ({ items }: any) => {
  const handleOnClick = (id: string) => {
    router.push(`/items/${id}`);
  };
  return (
    <div className={styles.container}>
      {!items.length ? (
        <h1>No hay resultados para esta busqueda</h1>
      ) : (
        <>
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => handleOnClick(item.id)}
            >
              <img src={item.picture} alt='product thumbnail'></img>
              <div className={styles.description}>
                <p>{item.id}</p>
                <h2>{item.title}</h2>
                <p>${item.price.amount}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductListScreen;
