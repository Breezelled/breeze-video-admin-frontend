// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { starNumDataType } from '../data.d';

const StarNum = ({
  loading,
  starNumData,
}: {
  loading: boolean;
  starNumData: starNumDataType[];
}) => (
  <Card
    title="参演电影数最高的部分影星"
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
  >
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        data={starNumData}
        // responsive
        xField="star"
        yField="count"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '影星',
          },
        }}
        yAxis={{
          title: {
            text: '参演电影数',
          },
        }}
        meta={{
          star: {
            alias: '影星',
          },
          count: {
            alias: '参演电影数',
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

export default StarNum;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
