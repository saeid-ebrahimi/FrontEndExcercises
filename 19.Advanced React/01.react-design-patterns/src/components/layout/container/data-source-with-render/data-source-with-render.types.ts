import type { ReactNode } from "react";

export interface IDataSourceWithRenderProps<T> {
  getData: () => Promise<T | undefined>;
  render: (resource: T) => ReactNode;
}
