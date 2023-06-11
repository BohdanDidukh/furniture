export interface Product {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
  category: {
    id: number;
    name: string;
    displayOrder: number;
  };
}
