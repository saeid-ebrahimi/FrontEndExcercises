export type TabId = 'welcome' | 'data' | 'chart';

export interface TabConfig {
  id: TabId;
  label: string;
  description: string;
}
