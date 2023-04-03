import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemsResponseI } from '@/customTypes/Response';
import { toItemsResponse } from '@/utils/mappers/response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemsResponseI>
) {
  const searchQuery = req.query.q;
  const url = process.env.API_MERCADO_LIBRE;
  const response = await fetch(`${url}/sites/MLA/search?q=${searchQuery}&limit=4`)
    .then((res) => res.json())

  res.status(200).json(toItemsResponse(response));
}
