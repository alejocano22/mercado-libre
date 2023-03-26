import type { NextApiRequest, NextApiResponse } from 'next';
import { DetailedItemI } from '@/utils/customTypes/Item';
import { toDetailedItem } from '@/utils/items';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailedItemI>
) {
  const itemId = req.query.id;
  const url = process.env.API_MERCADO_LIBRE;

  const [itemResponse, descriptionResponse] = await Promise.all([
    fetch(`${url}/items/${itemId}`).then((res) => res.json()),
    fetch(`${url}/items/${itemId}/description`).then((res) => res.json()),
  ]);

  const mappedResponse = toDetailedItem(itemResponse, descriptionResponse);
  res.status(200).json(mappedResponse);
}
