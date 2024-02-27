export interface RequestItem {
  id: string;
  price: number;
  brand: string;
  product: string;
}

export interface Filter {
  filterString: string | number;
  changeItems: React.Dispatch<React.SetStateAction<RequestItem[]>>;
}
