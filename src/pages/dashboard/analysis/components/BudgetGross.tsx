// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Scatter } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import { revenueBudgetDataType } from '../data.d';

const BudgetGross = ({
  loading,
  revenueBudgetData,
}: {
  loading: boolean;
  revenueBudgetData: revenueBudgetDataType[];
}) => (
  <Card loading={loading} className={styles.offlineCard} bordered={false}>
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Scatter
        // forceFit
        height={400}
        data={revenueBudgetData}
        // responsive
        xField="revenue"
        yField="budget"
        // seriesField="type"
        // regressionLine: {[
        //   {
        //     type: 'linear',
        //   },
        // ]}
        interactions={[
          {
            type: 'slider',
            cfg: {},
          },
        ]}
        regressionLine={{
          type: 'linear',
        }}

        // legend={{
        //   position: 'top-center',
        // }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default BudgetGross;
// ReactDOM.render(<BudgetGross />, document.getElementById('container'));
