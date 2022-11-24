// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { BidirectionalBar } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../../analysis/style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { companyBudgetRevenueDataType } from '../data';

const CompanyBudgetRevenue = ({
  loading,
  companyBudgetRevenueData,
}: {
  loading: boolean;
  companyBudgetRevenueData: companyBudgetRevenueDataType[];
}) => (
  <Card
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '0px' }}
  >
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <BidirectionalBar
        autoFit
        data={companyBudgetRevenueData}
        // responsive
        xField="company"
        yField={['budget', 'revenue']}
        xAxis={{
          position: 'bottom',
        }}
        yAxis={
          {
            // position: 'center'
            // title: {
            //   text: '电影票房（美元）',
            // },
          }
        }
        interactions={[
          {
            type: 'active-region',
          },
        ]}
        tooltip={{
          shared: true,
          showMarkers: false,
        }}
        meta={{
          revenue: {
            alias: '平均票房（美元）',
          },
          budget: {
            alias: '平均预算（美元）',
          },
        }}
        // legend={{
        //   position: 'top-center',
        // }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default CompanyBudgetRevenue;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
