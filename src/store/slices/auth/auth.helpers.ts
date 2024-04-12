import Cookies from 'js-cookie';

export enum Tokens {
  accessToken = 'token',
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.accessToken);
  console.log(accessToken);
  return accessToken || null;
};

export const saveAccessToken = (accessToken: string) => {
  console.log('set');
  Cookies.set(Tokens.accessToken, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeAccessToken = () => {
  Cookies.remove(Tokens.accessToken);
};
