// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { typeBudgetDataType } from '../data.d';

const BudgetRevenue = ({
  loading,
  typeBudgetData,
}: {
  loading: boolean;
  typeBudgetData: typeBudgetDataType[];
}) => (
  <Card
    title={'不同类型电影的平均预算'}
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
  >
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        // height={400}
        data={typeBudgetData}
        // responsive
        xField="type"
        yField="budget"
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
            text: '电影平均预算（美元）',
          },
        }}
        meta={{
          type: {
            alias: '类型',
          },
          budget: {
            alias: '预算',
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
