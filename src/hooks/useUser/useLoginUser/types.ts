export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type decryptToken = {
  username: string;
  email: string;
  exp: number;
};

export type UserDataResponse = {
  id: number;
  firstname: string;
  lastname: string;
  dni: number;
  email: string;
  phone: string;
};
