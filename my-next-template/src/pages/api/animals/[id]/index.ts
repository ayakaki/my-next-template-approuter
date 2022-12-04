// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Animal, AnimalCategory } from '../../../../models/Animal';
import { ANIMAL_CATEGORIES } from '../../../../utils/Consts';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  var animalCategory: AnimalCategory = {
    categoryId: 1,
    categoryName: ANIMAL_CATEGORIES[1],
  };

  var animal: Animal = {
    scientificName: 'アマガエル',
    animalCategory: animalCategory,
    theAverageLifeTimeBirths: 30,
  };

  res.status(200).json(animal);
}
