export type RecursiveObject = {
  [key: string]: string | RecursiveObject;
};

export interface IRecursiveProps {
  data: RecursiveObject | string;
}
