export async function getServerSideProps(context: { query: { id: string; }; }) {
  const { id } = context.query;
   const response = await fetch(`${process.env.ENVIRONMENT}/api/items/${id}/`).then(
    (res) => res.json()
  );

  const item = {
    id: response.id,
    author: response.author,
    title: response.title,
    price: response.price,
    description: response.description
  };

  return {
    props: {
      item,
    },
  };
}

const Item = ({ item }: any) => {
  return (
    <>
      <p>{item.id}</p>
      <h1>{item.title}</h1>
      <h3>{item.author}</h3>
      <h2>${item.price}</h2>
      <p>${item.description}</p>
    </>
  );
};

export default Item;
