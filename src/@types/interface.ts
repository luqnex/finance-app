export type CountsDataProps = {
  id: string;
  name: string;
  date: string;
  value: number;
  check: boolean | undefined;
};

export type RenderItemProps = {
  item: CountsDataProps;
};

export type NavigationProps = {
  Home: object | undefined;
  Counts: object | undefined;
  Income: object | undefined;
  Edit: Object | undefined;
};
