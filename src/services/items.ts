export const getDetailedItem = async (id: string) => {
  return await fetch(`${process.env.ENVIRONMENT}/api/items/${id}/`).then((res) =>
    res.json()
  );
}