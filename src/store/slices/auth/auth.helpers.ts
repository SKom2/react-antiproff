import Cookies from 'js-cookie';

export enum Tokens {
  accessToken = 'token',
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.accessToken);
  return accessToken || null;
};

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(Tokens.accessToken, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeAccessToken = () => {
  Cookies.remove(Tokens.accessToken);
};
