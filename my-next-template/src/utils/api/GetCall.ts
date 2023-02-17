import { myAxiosInstance } from './MyAxiosInstance';

export const GetCall = async (url: string, params?: object) => {
  url = params ? `${url}?${params}` : url;

  return myAxiosInstance
    .request({
      method: 'get',
      url: url,
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
