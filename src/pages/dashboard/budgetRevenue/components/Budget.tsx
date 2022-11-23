// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Area } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../../analysis/style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { budgetDataType } from '../data';

const Budget = ({ loading, budgetData }: { loading: boolean; budgetData: budgetDataType[] }) => (
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
        data={budgetData}
        // responsive
        xField="release_date"
        yField="budget"
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
            text: '电影预算（美元）',
          },
        }}
        meta={{
          budget: {
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

export default Budget;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
