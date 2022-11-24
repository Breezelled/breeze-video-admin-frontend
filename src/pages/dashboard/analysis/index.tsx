import type { FC } from 'react';
import { Suspense, useState } from 'react';
// import { EllipsisOutlined } from '@ant-design/icons';
import { Col, Row, Card } from 'antd';
// import { Dropdown, Menu } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
// import type { RadioChangeEvent } from 'antd/es/radio';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import { useRequest } from 'umi';

import { typeData } from './service';
import { getTimeDistance } from './utils/utils';
import type { AnalysisData } from './data.d';
// import styles from './style.less';
import TypeBudget from '@/pages/dashboard/analysis/components/TypeBudget';
import TypeRevenue from '@/pages/dashboard/analysis/components/TypeRevenue';
import TypeDateNum from '@/pages/dashboard/analysis/components/TypeDateNum';
import TypeWordCloud from '@/pages/dashboard/analysis/components/TypeWordCloud';
import TypePie from '@/pages/dashboard/analysis/components/TypePie';

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
  const { loading, data } = useRequest(typeData);
  // const { data } = useRequest(budgetRevenueData);
  // console.log(scatterData)
  console.log(data);
  console.log(data?.typeCountData || []);
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
        <Suspense fallback={null}>
          <Card
            title="不同类型电影的在各年份的上映数量"
            loading={loading}
            bordered={false}
            bodyStyle={{ overflow: 'hidden' }}
          >
            <TypeDateNum loading={loading} typeDateNumData={data?.typeDateNumData || []} />
          </Card>
        </Suspense>

        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              {/*<TopSearch*/}
              {/*  loading={loading}*/}
              {/*  visitData2={data?.visitData2 || []}*/}
              {/*  searchData={data?.searchData || []}*/}
              {/*  dropdownGroup={dropdownGroup}*/}
              {/*/>*/}
              <Card
                title="不同类型电影的平均预算"
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <TypeBudget loading={loading} typeBudgetData={data?.typeBudgetData || []} />
              </Card>
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              {/*<ProportionSales*/}
              {/*  dropdownGroup={dropdownGroup}*/}
              {/*  salesType={salesType}*/}
              {/*  loading={loading}*/}
              {/*  salesPieData={salesPieData || []}*/}
              {/*  handleChangeSalesType={handleChangeSalesType}*/}
              {/*/>*/}
              <Card
                title="不同类型电影的平均票房"
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <TypeRevenue loading={loading} typeRevenueData={data?.typeRevenueData || []} />
              </Card>
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

        <Row
          gutter={24}
          style={{
            marginTop: '12px',
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <Card
                title="不同类型电影的数量占比"
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <TypePie loading={loading} typeCountData={data?.typeCountData || []} />
              </Card>
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <Card
                title="不同类型电影词云"
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <TypeWordCloud loading={loading} typeCountData={data?.typeCountData || []} />
              </Card>
            </Suspense>
          </Col>
        </Row>
      </>
    </GridContent>
  );
};

export default Analysis;
