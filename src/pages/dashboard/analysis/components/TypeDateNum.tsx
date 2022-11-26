// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Line } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { typeDateNumDataType } from '../data.d';

const TypeDateNum = ({
  loading,
  typeDateNumData,
}: {
  loading: boolean;
  typeDateNumData: typeDateNumDataType[];
}) => (
  <Card
    title={'不同类型电影的在各年份的上映数量'}
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '0px' }}
  >
    <div style={{ padding: '0 24px' }}>
      <Line
        autoFit
        // height={400}
        data={typeDateNumData}
        // responsive
        xField="release_date"
        yField="count"
        seriesField="type"
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
            text: '电影数量',
          },
        }}
        meta={{
          type: {
            alias: '类型',
          },
          count: {
            alias: '电影数量',
          },
          release_date: {
            alias: '电影年份',
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

export default TypeDateNum;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
