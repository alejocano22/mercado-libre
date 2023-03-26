import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemI } from '@/utils/customTypes/Item';
import { toItems } from '@/utils/items';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ItemI[]>) {
  const searchQuery = req.query.q;
  const url = process.env.API_MERCADO_LIBRE;
  const response = await fetch(`${url}/sites/MLA/search?q=${searchQuery}&limit=4`).then(res => res.json());
  const mappedResponse = toItems(response);
  
  res.status(200).json(mappedResponse);
}