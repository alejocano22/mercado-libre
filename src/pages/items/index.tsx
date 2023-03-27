import router from 'next/router';
import styles from './items.module.css'

export async function getServerSideProps(context: any) {
  const search = context.query?.search || '';
  const response = await fetch(
    `${process.env.ENVIRONMENT}/api/items?q=${search}`
  ).then((res) => res.json());

  return {
    props: {
      search,
      items: response,
    },
  };
}

const Items = ({ search, items }: any) => {
  const handleOnClick = (id: string) => {
    router.push(`/items/${id}`);
  }
  return (
    <div className={styles.container}>
      {!items.length ? (
        <h1>No results</h1>
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
                <p>{item.author}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Items;
