import router from 'next/router';

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
    <>
      {!items.length ? (
        <h1>Is empty!</h1>
      ) : (
        <>
          <p>{`Here will be shown 4 products related to: ${search}`}</p>
          {items.map((item: any, index: number) => (
            <div key={index} onClick={() => handleOnClick(item.id)}>
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
              <h3>{item.author}</h3>
              <h2>${item.price}</h2>
              <p>-------------</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Items;
