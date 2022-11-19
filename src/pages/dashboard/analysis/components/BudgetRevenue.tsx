// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Scatter } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { budgetRevenueDataType } from '../data.d';

const BudgetRevenue = ({
  loading,
  budgetRevenueData,
}: {
  loading: boolean;
  budgetRevenueData: budgetRevenueDataType[];
}) => (
  <Card
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '32px' }}
  >
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Scatter
        autoFit
        // height={400}
        data={budgetRevenueData}
        // responsive
        xField="budget"
        yField="revenue"
        // seriesField="type"
        interactions={[
          {
            type: 'slider',
            cfg: {},
          },
        ]}
        regressionLine={{
          type: 'linear',
        }}
        xAxis={{
          title: {
            text: '电影预算（美元）',
          },
        }}
        yAxis={{
          title: {
            text: '电影票房（美元）',
          },
        }}
        meta={{
          budget: {
            alias: '预算',
          },
          revenue: {
            alias: '票房',
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

export default BudgetRevenue;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
