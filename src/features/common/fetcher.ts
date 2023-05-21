import { isString } from '@/features/common/typeGuards';

export const fetcher = async <T>(pathname: string): Promise<T> => {
  const hostname: string | undefined = process.env.NEXT_PUBLIC_API_HOST;

  // ホスト名が文字列でない場合は例外を投げる
  if (!isString(hostname)) throw new Error('hostname is not string');

  const endpoint = hostname + pathname;

  return await fetch(endpoint, { next: { revalidate: 10 } }).then(
    (res) => res.json() as T
  );
};
