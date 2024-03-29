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

export type runtimeDataType = {
  count: number;
  type: string;
};

export type reviewWordFrequencyDataType = {
  word: string;
  frequency: number;
};

export type companyMovieNumDataType = {
  company: string;
  count: number;
};

export type companyTypeProportionDataType = {
  company: string;
  count: number;
  type: string;
};

export type starNumDataType = {
  star: string;
  count: number;
};

export type reviewerNumDataType = {
  author: string;
  count: number;
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
  runtimeData: runtimeDataType[];
  reviewWordFrequencyData: reviewWordFrequencyDataType[];
  companyMovieNumData: companyMovieNumDataType[];
  companyTypeProportionData: companyTypeProportionDataType[];
  starNumData: starNumDataType[];
  reviewerNumData: reviewerNumDataType[];
}
