// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { WordCloud } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { reviewWordFrequencyDataType } from '../data.d';

const ReviewWordCloud = ({
  loading,
  reviewWordFrequencyData,
}: {
  loading: boolean;
  reviewWordFrequencyData: reviewWordFrequencyDataType[];
}) => (
  <Card
    title="评论高频词云"
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '12px' }}
  >
    <div style={{ padding: '0 24px' }}>
      <WordCloud
        autoFit
        data={reviewWordFrequencyData}
        // imageMask={'https://i.postimg.cc/50Qxykw7/logo.png'}
        wordField="word"
        colorField="word"
        weightField="frequency"
        wordStyle={{
          fontFamily: 'Verdana',
          fontSize: [24, 100],
          rotation: 0,
        }}
        interactions={[
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ]}
        state={{
          active: {
            style: {
              lineWidth: 3,
            },
          },
        }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default ReviewWordCloud;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
