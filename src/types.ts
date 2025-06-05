export interface ProductProps {
  id: string;
  title: string;
  price: number;
  discount?: number;
  image: string;
  affiliateLink: string;
}

export interface CategoryProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}