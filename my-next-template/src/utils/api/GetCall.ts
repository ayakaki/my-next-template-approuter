import { myAxiosInstance } from './MyAxiosInstance';

export const GetCall = (url: string, params?: object) => {
  url = params ? `${url}?${params}` : url;

  return myAxiosInstance
    .request({
      method: 'get',
      url: url,
    })
    .catch((error) => {
      return false;
    });
};
