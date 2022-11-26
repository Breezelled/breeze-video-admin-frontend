import { DataItem } from '@antv/g2plot/esm/interface/config';
import React from 'react';

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

export type displayDataType = {
  budget: string;
  company: string;
  country: string;
  director: string;
  id: React.Key;
  intro: string;
  language: string;
  name: string;
  rating: string;
  rating_num: string;
  release_date: string;
  revenue: string;
  runtime: string;
  star: string;
  tag: string;
  type: string;
  writer: string;
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
  displayData: displayDataType[];
  total: number;
}
