// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Bar } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { ratingCompanyDateDataType } from '../data.d';

const RatingCompanyDate = ({
  loading,
  ratingCompanyDateData,
}: {
  loading: boolean;
  ratingCompanyDateData: ratingCompanyDateDataType[];
}) => (
  <Card
    title="六大电影公司评分区间"
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{ marginTop: '0px' }}
  >
    <div style={{ padding: '0 24px' }}>
      <Bar
        autoFit
        data={ratingCompanyDateData}
        // responsive
        xField="rating"
        yField="company"
        isRange={true}
        xAxis={{
          title: {
            text: '电影评分',
          },
        }}
        yAxis={
          {
            // title: {
            //   text: '电影公司',
            // },
          }
        }
        meta={{
          company: {
            alias: '电影公司',
          },
          rating: {
            alias: '电影评分范围',
          },
        }}
        label={{
          position: 'middle',
          layout: [
            {
              type: 'adjust-color',
            },
          ],
        }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default RatingCompanyDate;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
