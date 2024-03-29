import { DataItem } from '@antv/g2plot/esm/interface/config';

export { DataItem };

export interface VisitDataType {
  x: string;
  y: number;
}

export type SearchDataType = {
  index: number;
  keyword: string;
  count: number;
  range: number;
  status: number;
};

export type OfflineDataType = {
  name: string;
  cvr: number;
};

export interface OfflineChartData {
  date: number;
  type: number;
  value: number;
}

export type RadarData = {
  name: string;
  label: string;
  value: number;
};

export type typeBudgetDataType = {
  budget: number;
  type: string;
};

export type typeRevenueDataType = {
  revenue: number;
  type: string;
};

export type typeDateNumDataType = {
  count: number;
  release_date: string;
  type: string;
};

export type typeCountDataType = {
  count: number;
  type: string;
};

export interface AnalysisData {
  visitData: DataItem[];
  visitData2: DataItem[];
  salesData: DataItem[];
  searchData: DataItem[];
  offlineData: OfflineDataType[];
  offlineChartData: DataItem[];
  salesTypeData: DataItem[];
  salesTypeDataOnline: DataItem[];
  salesTypeDataOffline: DataItem[];
  radarData: RadarData[];
  budgetRevenueData: budgetRevenueDataType[];
  typeBudgetData: typeBudgetDataType[];
  typeRevenueData: typeRevenueDataType[];
  typeDateNumData: typeDateNumDataType[];
  typeCountData: typeCountDataType[];
}
