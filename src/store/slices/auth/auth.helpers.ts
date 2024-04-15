export enum Tokens {
  accessToken = 'token',
}

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(Tokens.accessToken);
  return accessToken || null;
};

export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem(Tokens.accessToken, accessToken);
};

export const removeAccessToken = () => {
  localStorage.removeItem(Tokens.accessToken);
};
