import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BigButton } from '../../../components/buttons/BigButton';
import { Animal } from '../../../models/Animal';
import { GetAnimal } from '../../../utils/api/animals/GetAnimal';

const Animals: NextPage = () => {
  const [animal, setAnimal] = useState<Animal | void>();
  const router = useRouter();

  const getAnimalInfo = async (id: string) => {

    
    let animal: Animal | void;

    if (typeof router.query.id === 'string') {
      animal = await GetAnimal(router.query.id).then((response: any) => {
        return response.data;
      });

      console.log('animal->', animal);
      setAnimal(animal);
    }
  };

  //////////////////////////////////
  // 画面描画要素
  //////////////////////////////////
  return (
    <>
      <p>動物名は{animal?.scientificName}</p>
      <p>分類は{animal?.animalCategory.categoryName}</p>
      <p>生涯出産数の平均は{animal?.theAverageLifeTimeBirths}</p>
      <BigButton onClickEvent={getAnimalInfo} />
    </>
  );
};

export default Animals;
