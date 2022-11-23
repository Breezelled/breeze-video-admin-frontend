// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Area } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../../analysis/style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { revenueDataType } from '../data';

const Revenue = ({
  loading,
  revenueData,
}: {
  loading: boolean;
  revenueData: revenueDataType[];
}) => (
  <Card
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '0px' }}
  >
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Area
        autoFit
        data={revenueData}
        // responsive
        xField="release_date"
        yField="revenue"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '上映年份',
          },
        }}
        yAxis={{
          title: {
            text: '电影票房（美元）',
          },
        }}
        meta={{
          revenue: {
            alias: '预算',
          },
          release_date: {
            alias: '上映年份',
          },
        }}
        annotations={[
          {
            type: 'text',
            position: ['min', 'median'],
            content: '中位数',
            offsetY: -4,
            style: {
              textBaseline: 'bottom',
            },
          },
          {
            type: 'line',
            start: ['min', 'median'],
            end: ['max', 'median'],
            style: {
              stroke: 'red',
              lineDash: [2, 2],
            },
          },
        ]}

        // legend={{
        //   position: 'top-center',
        // }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default Revenue;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
