// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Line } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { revenuePredictionModelLineDataType } from '../data.d';

const RevenuePredictionModelLine = ({
  loading,
  revenuePredictionModelLineData,
}: {
  loading: boolean;
  revenuePredictionModelLineData: revenuePredictionModelLineDataType[];
}) => (
  <Card
    title="不同模型和实际数值的票房折线图"
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
  >
    <div style={{ padding: '0 24px' }}>
      <Line
        autoFit
        // height={400}
        data={revenuePredictionModelLineData}
        // responsive
        xField="x"
        yField="y"
        seriesField="model"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '测试集数量',
          },
        }}
        yAxis={{
          title: {
            text: '票房',
          },
        }}
        meta={{
          model: {
            alias: '模型',
          },
          x: {
            alias: '测试集数量',
          },
          y: {
            alias: '票房',
          },
        }}
        smooth={true}
        animation={{
          appear: {
            duration: 3000,
          },
        }}
        legend={{
          position: 'top',
        }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default RevenuePredictionModelLine;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
