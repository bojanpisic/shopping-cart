export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: { [key: string]: unknown };
  additionalInformation: {
    warranaty: string;
    'in the box': string[];
  };
};
