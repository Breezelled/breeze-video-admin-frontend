import { request } from 'umi';
import type { AnalysisData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}

export async function g2plotTest(): Promise<{ data: AnalysisData }> {
  return request('/api/g2plot_test');
}
