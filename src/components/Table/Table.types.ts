export interface RequestItem {
  id: string;
  price: number;
  brand: string;
  product: string;
}

export interface Request {
  filterString?: string | number;
  changeItems: React.Dispatch<React.SetStateAction<RequestItem[]>>;
  setCurrentValueToZero: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
