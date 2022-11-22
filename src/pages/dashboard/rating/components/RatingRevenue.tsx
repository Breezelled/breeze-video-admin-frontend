// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Scatter } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { ratingRevenueDataType } from '../data.d';

const RatingRevenue = ({
  loading,
  ratingRevenueData,
}: {
  loading: boolean;
  ratingRevenueData: ratingRevenueDataType[];
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
        data={ratingRevenueData}
        // responsive
        xField="rating"
        yField="revenue"
        // seriesField="type"
        regressionLine={{
          type: 'linear',
        }}
        xAxis={{
          title: {
            text: '电影评分（10分满分）',
          },
        }}
        yAxis={{
          title: {
            text: '电影票房（美元）',
          },
        }}
        meta={{
          rating: {
            alias: '评分',
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

export default RatingRevenue;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
