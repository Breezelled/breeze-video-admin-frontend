import { request } from 'umi';
import type { AnalysisData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}

export async function revenuePredictionData(): Promise<{ data: AnalysisData }> {
  return request('/api/revenue_prediction/data');
}
