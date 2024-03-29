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

export type ratingRevenueDataType = {
  rating: number;
  revenue: number;
};

export type ratingCompanyDateDataType = {
  company: string;
  rating: [];
};

export type ratingCountryNumDataType = {
  country: string;
  value: number;
  rating: number;
};

export type ratingDirectorNumDataType = {
  director: string;
  count: number;
  rating: number;
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
  ratingRevenueData: ratingRevenueDataType[];
  ratingCompanyDateData: ratingCompanyDateDataType[];
  ratingCountryNumData: ratingCountryNumDataType[];
  ratingDirectorNumData: ratingDirectorNumDataType[];
}
