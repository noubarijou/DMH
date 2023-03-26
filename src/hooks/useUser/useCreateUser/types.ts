export type SignUpPayload = {
  dni: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export type SignUpResponse = {
  account_id: number;
  email: string;
  user_id: number;
};
