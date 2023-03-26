export type TransferenceRequest = {
  amount: number;
  dated: string;
  destination?: string;
  origin?: string;
  account_id: number;
};

export type TransferenceResponse = {
  id: number;
  account_id: number;
  type: string;
  description: string;
  amount: number;
  dated: string;
};
