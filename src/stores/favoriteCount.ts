import { atom, selector } from 'recoil';

export const favoriteCountAtom = atom<number>({
  key: 'favoriteCountAtom',
  default: 0,
});

export const favoriteCountState = selector({
  key: 'favoriteCountState',
  get: ({ get }) => {
    return get(favoriteCountAtom);
  },
});
