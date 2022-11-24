// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Column, G2 } from '@ant-design/plots';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { companyTypeProportionDataType } from '../data.d';

G2.registerInteraction('element-link', {
  start: [
    {
      trigger: 'interval:mouseenter',
      action: 'element-link-by-color:link',
    },
  ],
  end: [
    {
      trigger: 'interval:mouseleave',
      action: 'element-link-by-color:unlink',
    },
  ],
});
const CompanyTypeProportion = ({
  loading,
  companyTypeProportionData,
}: {
  loading: boolean;
  companyTypeProportionData: companyTypeProportionDataType[];
}) => (
  <Card loading={loading} className={styles.offlineCard} bordered={false}>
    {/*{offlineData.map((shop) => (*/}
    <div style={{ padding: '0 24px' }}>
      <Column
        autoFit
        // height={400}
        data={companyTypeProportionData}
        // responsive
        xField="company"
        yField="count"
        seriesField="type"
        isPercent={true}
        isStack={true}
        xAxis={{
          title: {
            text: '电影公司',
          },
        }}
        yAxis={{
          title: {
            text: '电影类型占比',
          },
        }}
        meta={{
          value: {
            min: 0,
            max: 1,
          },
          type: {
            alias: '类型',
          },
          count: {
            alias: '电影数量',
          },
          company: {
            alias: '电影公司',
          },
        }}
        label={{
          position: 'middle',
          content: (item) => {
            return `${(item.count * 100).toFixed(2)}%`;
          },
          style: {
            fill: '#fff',
          },
        }}
        interactions={[
          {
            type: 'element-highlight-by-color',
          },
          {
            type: 'element-link',
          },
        ]}

        // legend={{
        //   position: 'top-center',
        // }}
      />
    </div>
    {/*))}*/}
  </Card>
);

export default CompanyTypeProportion;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
