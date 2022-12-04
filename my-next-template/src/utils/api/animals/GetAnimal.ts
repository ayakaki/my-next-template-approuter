import { END_POINTS } from '../ConstsMyAxios';
import { GetCall } from '../GetCall';

export const GetAnimal = (id: string) => {
  return GetCall(`${END_POINTS.animals}/${id}`);
};
