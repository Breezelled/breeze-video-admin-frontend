// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Treemap } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { ratingDirectorNumDataType } from '../data.d';

const RatingDirectorNum = ({
  loading,
  ratingDirectorNumData,
}: {
  loading: boolean;
  ratingDirectorNumData: ratingDirectorNumDataType[];
}) => (
  <Card
    title="导演矩形树图"
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '0px' }}
  >
    <div style={{ padding: '0 24px' }}>
      <Treemap
        autoFit
        data={ratingDirectorNumData}
        // responsive
        colorField="name"
        meta={{
          name: {
            alias: '导演',
          },
          rating: {
            alias: '电影评分',
          },
          value: {
            alias: '电影数量',
          },
        }}
        tooltip={{
          follow: true,
          offset: 5,
          customContent: (value, items) => {
            if (!items || items.length <= 0) return;
            const { data: itemData } = items[0];
            return (
              `<div class='${styles.container}'>` +
              `<div class='${styles.title}'>${itemData.name}</div>` +
              `<div class='${styles.tooltipItem}'><span>电影数量</span><span>${itemData.value}</span></div>` +
              `<div class='${styles.tooltipItem}'><span>平均评分</span><span>${itemData.rating}</span></div>` +
              `</div>`
            );
          },
        }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default RatingDirectorNum;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
