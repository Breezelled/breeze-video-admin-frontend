// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { typeRevenueDataType } from '../data.d';

const BudgetRevenue = ({ typeRevenueData }: { typeRevenueData: typeRevenueDataType[] }) => (
  <Card className={styles.offlineCard} bordered={false}>
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        // height={400}
        data={typeRevenueData}
        // responsive
        xField="type"
        yField="revenue"
        // seriesField="type"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '电影类型',
          },
        }}
        yAxis={{
          title: {
            text: '电影票房（美元）',
          },
        }}
        meta={{
          type: {
            alias: '类型',
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
