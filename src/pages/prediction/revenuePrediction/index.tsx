import type { FC } from 'react';
import { Suspense, useState } from 'react';
// import { EllipsisOutlined } from '@ant-design/icons';
// import { Dropdown, Menu } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
// import type { RadioChangeEvent } from 'antd/es/radio';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
// import IntroduceRow from './components/IntroduceRow';
// import SalesCard from './components/SalesCard';
// import TopSearch from './components/TopSearch';
// import ProportionSales from './components/ProportionSales';
// import OfflineData from './components/OfflineData';
import { useRequest } from 'umi';

import { revenuePredictionData } from './service';
// import { fakeChartData } from './service';
import PageLoading from './components/PageLoading';
// import type { TimeType } from './components/SalesCard';
import { getTimeDistance } from './utils/utils';
import type { AnalysisData } from './data.d';
import RevenuePredictionModelColumn from '@/pages/prediction/revenuePrediction/components/RevenuePredictionModelColumn';
import RevenuePredictionModelLine from '@/pages/prediction/revenuePrediction/components/RevenuePredictionModelLine';
// import styles from './style.less';

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

type SalesType = 'all' | 'online' | 'stores';

const Analysis: FC<AnalysisProps> = () => {
  const [] = useState<SalesType>('all');
  const [] = useState<string>('');
  const [] = useState<RangePickerValue>(getTimeDistance('year'));

  // const { scatterData } = useRequest(g2plotTest)
  const { loading, data } = useRequest(revenuePredictionData);
  // const { data } = useRequest(budgetRevenueData);
  // console.log(scatterData)
  console.log(data);
  console.log(data?.revenuePredictionModelColumnData || []);
  //
  // const selectDate = (type: TimeType) => {
  //   setRangePickerValue(getTimeDistance(type));
  // };
  //
  // const handleRangePickerChange = (value: RangePickerValue) => {
  //   setRangePickerValue(value);
  // };
  //
  // const isActive = (type: TimeType) => {
  //   if (!rangePickerValue) {
  //     return '';
  //   }
  //   const value = getTimeDistance(type);
  //   if (!value) {
  //     return '';
  //   }
  //   if (!rangePickerValue[0] || !rangePickerValue[1]) {
  //     return '';
  //   }
  //   if (
  //     rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
  //     rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
  //   ) {
  //     return styles.currentDate;
  //   }
  //   return '';
  // };
  //
  // let salesPieData;
  // if (salesType === 'all') {
  //   salesPieData = data?.salesTypeData;
  // } else {
  //   salesPieData = salesType === 'online' ? data?.salesTypeDataOnline : data?.salesTypeDataOffline;
  // }

  // const menu = (
  //   <Menu>
  //     <Menu.Item>操作一</Menu.Item>
  //     <Menu.Item>操作二</Menu.Item>
  //   </Menu>
  // );

  // const dropdownGroup = (
  //   <span className={styles.iconGroup}>
  //     <Dropdown overlay={menu} placement="bottomRight">
  //       <EllipsisOutlined />
  //     </Dropdown>
  //   </span>
  // );
  //
  // const handleChangeSalesType = (e: RadioChangeEvent) => {
  //   setSalesType(e.target.value);
  // };
  //
  // const handleTabChange = (key: string) => {
  //   setCurrentTabKey(key);
  // };
  //
  // const activeKey = currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';

  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          {/*<IntroduceRow loading={loading} visitData={data?.visitData || []} />*/}
        </Suspense>

        <Suspense fallback={null}>
          <RevenuePredictionModelLine
            loading={loading}
            revenuePredictionModelLineData={data?.revenuePredictionModelLineData || []}
          />
        </Suspense>

        <Suspense fallback={null}>
          <RevenuePredictionModelColumn
            loading={loading}
            revenuePredictionModelColumnData={data?.revenuePredictionModelColumnData || []}
          />
        </Suspense>
      </>
    </GridContent>
  );
};

export default Analysis;
