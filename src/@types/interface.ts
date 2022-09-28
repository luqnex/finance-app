export type CountsDataProps = {
  id: string;
  name: string;
  date: string;
  value: number;
  check: boolean;
};

export type RenderItemProps = {
  item: CountsDataProps;
};
