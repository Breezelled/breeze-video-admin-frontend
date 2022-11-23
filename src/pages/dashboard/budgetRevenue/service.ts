import { request } from 'umi';
import type { AnalysisData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}

export async function budgetRevenueData(): Promise<{ data: AnalysisData }> {
  return request('/api/budget_revenue/data');
}
