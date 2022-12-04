import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BigButton } from '../../../components/button/BigButton';
import { Animal } from '../../../models/Animal';
import { GetAnimal } from '../../../utils/api/animals/GetAnimal';

const Animals: NextPage = () => {
  const [animal, setAnimal] = useState<Animal>();
  const router = useRouter();

  const getAnimalInfo = (id: string) => {
    if (typeof router.query.id === 'string') {
      GetAnimal(router.query.id).then((response: any) => {
        setAnimal(response.data);
      });
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
