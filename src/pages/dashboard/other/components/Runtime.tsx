// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Pie } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { runtimeDataType } from '../data.d';

const TypeWordCloud = ({
  loading,
  runtimeData,
}: {
  loading: boolean;
  runtimeData: runtimeDataType[];
}) => (
  <Card
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '12px' }}
  >
    <div style={{ padding: '0 24px' }}>
      <Pie
        autoFit
        // appendPadding={10}
        data={runtimeData}
        // responsive
        colorField="type"
        angleField="count"
        radius={0.75}
        label={{
          type: 'spider',
          labelHeight: 28,
          content: '{name}\n{percentage}',
        }}
        interactions={[
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ]}
        legend={{
          position: 'left',
        }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default TypeWordCloud;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
