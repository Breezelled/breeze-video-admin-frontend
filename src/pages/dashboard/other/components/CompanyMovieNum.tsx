// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { companyMovieNumDataType } from '../data.d';

const CompanyMovieNum = ({
  loading,
  companyMovieNumData,
}: {
  loading: boolean;
  companyMovieNumData: companyMovieNumDataType[];
}) => (
  <Card
    title="六大电影公司上映电影总数"
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
  >
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        data={companyMovieNumData}
        // responsive
        xField="company"
        yField="count"
        // seriesField="type"
        slider={{
          start: 0,
          end: 1,
        }}
        xAxis={{
          title: {
            text: '电影公司',
          },
        }}
        yAxis={{
          title: {
            text: '上映电影数量',
          },
        }}
        meta={{
          company: {
            alias: '电影公司',
          },
          count: {
            alias: '电影数量',
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

export default CompanyMovieNum;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
