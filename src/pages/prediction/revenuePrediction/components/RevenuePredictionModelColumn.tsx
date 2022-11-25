// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { revenuePredictionModelColumnDataType } from '../data.d';

const RevenuePredictionModelColumn = ({
  loading,
  revenuePredictionModelColumnData,
}: {
  loading: boolean;
  revenuePredictionModelColumnData: revenuePredictionModelColumnDataType[];
}) => (
  <Card loading={loading} className={styles.offlineCard} bordered={false}>
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        // height={400}
        data={revenuePredictionModelColumnData}
        // responsive
        xField="model"
        yField="score"
        // seriesField="type"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '模型类型',
          },
        }}
        yAxis={{
          title: {
            text: '预测评分',
          },
        }}
        meta={{
          score: {
            alias: '预测评分',
          },
          model: {
            alias: '模型',
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

export default RevenuePredictionModelColumn;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
