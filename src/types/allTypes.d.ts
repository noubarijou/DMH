export interface UserData {
  id?: number;
  firstname?: string;
  lastname?: string;
  dni?: number;
  email?: string;
  phone?: string;
  account_id: {
    id: number;
    user_id: number;
    cvu: number;
    alias: string;
    available_amount: number;
  };
}
