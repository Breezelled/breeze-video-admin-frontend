import { request } from 'umi';
import type { AnalysisData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}

export async function typeData(): Promise<{ data: AnalysisData }> {
  return request('/api/type/data');
}
