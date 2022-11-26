import type { FC } from 'react';
import { Suspense, useState } from 'react';
// import { EllipsisOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
// import { Dropdown, Menu } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import { useRequest } from 'umi';

import { otherData } from './service';
// import { fakeChartData } from './service';
import PageLoading from './components/PageLoading';
// import type { TimeType } from './components/SalesCard';
import { getTimeDistance } from './utils/utils';
import type { AnalysisData } from './data.d';
import Runtime from '@/pages/dashboard/other/components/Runtime';
import ReviewWordCloud from '@/pages/dashboard/other/components/ReviewWordCloud';
import CompanyMovieNum from '@/pages/dashboard/other/components/CompanyMovieNum';
import CompanyTypeProportion from '@/pages/dashboard/other/components/CompanyTypeProportion';
import StarNum from '@/pages/dashboard/other/components/StarNum';
import ReviewerNum from '@/pages/dashboard/other/components/ReviewerNum';
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
  const { loading, data } = useRequest(otherData);
  // const { data } = useRequest(budgetRevenueData);
  // console.log(scatterData)
  console.log(data);
  console.log(data?.runtimeData || []);
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
          {/*<SalesCard*/}
          {/*  rangePickerValue={rangePickerValue}*/}
          {/*  salesData={data?.salesData || []}*/}
          {/*  isActive={isActive}*/}
          {/*  handleRangePickerChange={handleRangePickerChange}*/}
          {/*  loading={loading}*/}
          {/*  selectDate={selectDate}*/}
          {/*/>*/}
        </Suspense>

        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <CompanyTypeProportion
                loading={loading}
                companyTypeProportionData={data?.companyTypeProportionData || []}
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <CompanyMovieNum
                loading={loading}
                companyMovieNumData={data?.companyMovieNumData || []}
              />
            </Suspense>
          </Col>
        </Row>

        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <StarNum loading={loading} starNumData={data?.starNumData || []} />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ReviewerNum loading={loading} reviewerNumData={data?.reviewerNumData || []} />
            </Suspense>
          </Col>
        </Row>

        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <Runtime loading={loading} runtimeData={data?.runtimeData || []} />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ReviewWordCloud
                loading={loading}
                reviewWordFrequencyData={data?.reviewWordFrequencyData || []}
              />
            </Suspense>
          </Col>
        </Row>

        <Suspense fallback={null}>
          {/*<OfflineData*/}
          {/*  activeKey={activeKey}*/}
          {/*  loading={loading}*/}
          {/*  offlineData={data?.offlineData || []}*/}
          {/*  offlineChartData={data?.offlineChartData || []}*/}
          {/*  handleTabChange={handleTabChange}*/}
          {/*/>*/}
        </Suspense>
        <Suspense fallback={null}></Suspense>
      </>
    </GridContent>
  );
};

export default Analysis;
