export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: Record<string, string | number | string[]>;
  additionalInformation: Record<string, string | number | string[]>;
};
