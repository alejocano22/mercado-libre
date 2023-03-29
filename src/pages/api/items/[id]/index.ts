import type { NextApiRequest, NextApiResponse } from 'next';
import { DetailedItemResponseI } from '@/customTypes/Response';
import { toDetailedItemResponse } from '@/utils/mappers/response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailedItemResponseI>
) {
  const itemId = req.query.id;
  const url = process.env.API_MERCADO_LIBRE;
  const [itemResponse, descriptionResponse] = await Promise.all([
    fetch(`${url}/items/${itemId}`).then((res) => res.json()),
    fetch(`${url}/items/${itemId}/description`).then((res) => res.json()),
  ]);
  
  res.status(200).json(toDetailedItemResponse(
    itemResponse,
    descriptionResponse
  ));
}
