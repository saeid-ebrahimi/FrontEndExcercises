import type { ReactNode } from "react";

export interface IDataSourceWithRenderProps<T> {
  getData: () => Promise<T>;
  render: (resource: T) => ReactNode;
}
