// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { reviewerNumDataType } from '../data.d';

const ReviewerNum = ({
  loading,
  reviewerNumData,
}: {
  loading: boolean;
  reviewerNumData: reviewerNumDataType[];
}) => (
  <Card loading={loading} className={styles.offlineCard} bordered={false}>
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        data={reviewerNumData}
        // responsive
        xField="author"
        yField="count"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '评论者',
          },
        }}
        yAxis={{
          title: {
            text: '评论数',
          },
        }}
        meta={{
          author: {
            alias: '评论者',
          },
          count: {
            alias: '评论数',
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

export default ReviewerNum;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
