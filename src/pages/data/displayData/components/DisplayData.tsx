// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Button, Input, Space, Table, Tooltip, Tag } from 'antd';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
// import {OfflineDataType} from "../data.d";
// import {Line} from "@ant-design/charts";
import type { displayDataType } from '../data.d';
import { useRef, useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import type { ColumnsType, ColumnType, TablePaginationConfig } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
// import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
// @ts-ignore
import Highlighter from 'react-highlight-words';

type DataIndex = keyof displayDataType;

interface TableParams {
  pagination?: TablePaginationConfig;
}

const getParams = (params: TableParams) => ({
  page: params.pagination?.current,
  size: params.pagination?.pageSize,
  ...params,
});

const DisplayData: ({}: {}) => JSX.Element = ({}: // loading, total
{
  // loading: boolean;
  // displayData: displayDataType[];
  // total: number
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      showQuickJumper: true,
      position: ['bottomCenter'],
    },
  });
  const totalDataUrl = `/api/display/data?${qs.stringify(getParams(tableParams))}`;
  const fetchData = (URL: string) => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then(({ results, total }) => {
        console.log(results);
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: total,
            showQuickJumper: true,
            position: ['bottomCenter'],
          },
        });
      });
  };

  useEffect(() => {
    fetchData(totalDataUrl);
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    // filters: Record<string, FilterValue>,
    // sorter: SorterResult<displayDataType>,
  ) => {
    setTableParams({
      pagination,
      // filters,
      // ...sorter,
    });
  };

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<displayDataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<displayDataType> = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      ...getColumnSearchProps('id'),
    },
    {
      title: '电影名',
      width: 200,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      ...getColumnSearchProps('name'),
    },
    {
      title: '电影类型',
      dataIndex: 'type',
      key: 'type',
      width: 150,

      render: (type: string) => (
        <span>
          {type.split('|').map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'Romance') {
              color = 'pink';
            } else if (tag === 'Comedy') {
              color = 'yellow';
            } else if (tag === 'Adventure') {
              color = 'orange';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: '发行时间',
      dataIndex: 'release_date',
      key: 'release_date',
      width: 200,
    },
    {
      title: '电影时长',
      dataIndex: 'runtime',
      key: 'runtime',
      width: 200,
    },
    {
      title: '电影语言',
      dataIndex: 'language',
      key: 'language',
      width: 200,
      ...getColumnSearchProps('language'),
    },
    {
      title: '电影预算',
      dataIndex: 'budget',
      key: 'budget',
      width: 150,
    },
    {
      title: '电影票房',
      dataIndex: 'revenue',
      key: 'revenue',
      width: 150,
    },
    {
      title: '电影评分',
      dataIndex: 'rating',
      key: 'rating',
      width: 150,
    },
    { title: '电影评分数', dataIndex: 'rating_num', key: 'rating_num', width: 150 },
    {
      title: '电影公司',
      dataIndex: 'company',
      key: 'company',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      ...getColumnSearchProps('company'),
      render: (company) => (
        <Tooltip placement="topLeft" title={company}>
          {company}
        </Tooltip>
      ),
    },
    {
      title: '国家或地区',
      dataIndex: 'country',
      key: 'country',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      ...getColumnSearchProps('country'),
      render: (country) => (
        <Tooltip placement="topLeft" title={country}>
          {country}
        </Tooltip>
      ),
    },
    {
      title: '导演',
      dataIndex: 'director',
      key: 'director',
      width: 150,
      ...getColumnSearchProps('director'),
    },
    {
      title: '编剧',
      dataIndex: 'writer',
      key: 'writer',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      ...getColumnSearchProps('writer'),
      render: (writer) => (
        <Tooltip placement="topLeft" title={writer}>
          {writer}
        </Tooltip>
      ),
    },
    {
      title: '明星',
      dataIndex: 'star',
      key: 'star',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      ...getColumnSearchProps('star'),
      render: (star) => (
        <Tooltip placement="topLeft" title={star}>
          {star}
        </Tooltip>
      ),
    },
    {
      title: '标语',
      dataIndex: 'tag',
      key: 'tag',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (tag) => (
        <Tooltip placement="topLeft" title={tag}>
          {tag}
        </Tooltip>
      ),
    },
    {
      title: '介绍',
      dataIndex: 'intro',
      key: 'intro',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (intro) => (
        <Tooltip placement="topLeft" title={intro}>
          {intro}
        </Tooltip>
      ),
    },

    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>查看</a>,
    },
  ];

  return (
    <Card className={styles.offlineCard} bordered={false} loading={loading}>
      <div style={{ padding: '0 24px' }}>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1500, y: 750 }}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};

export default DisplayData;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
