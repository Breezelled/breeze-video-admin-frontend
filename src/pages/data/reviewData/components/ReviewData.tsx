// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import request from "umi-request";
import { Button, Input, Space, Table, Tooltip } from 'antd';
// import type { DataItem } from '../data.d';
import { Card } from 'antd';
import styles from '../style.less';
import type { reviewDataType } from '../data.d';
import { useRef, useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import type { ColumnsType, ColumnType, TablePaginationConfig } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
// import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
// @ts-ignore
import Highlighter from 'react-highlight-words';

type DataIndex = keyof reviewDataType;

interface TableParams {
  pagination?: TablePaginationConfig;
}

const getParams = (params: TableParams) => ({
  page: params.pagination?.current,
  size: params.pagination?.pageSize,
  ...params,
});

const ReviewData: ({}: {}) => JSX.Element = ({}: // loading, total
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
  const totalDataUrl = `/api/review/data?${qs.stringify(getParams(tableParams))}`;
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

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<reviewDataType> => ({
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

  const columns: ColumnsType<reviewDataType> = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      ...getColumnSearchProps('id'),
    },
    {
      title: '电影ID',
      width: 150,
      dataIndex: 'movie_id',
      key: 'movie_id',
      ...getColumnSearchProps('movie_id'),
    },
    {
      title: '评论者',
      dataIndex: 'author',
      key: 'author',
      width: 150,
      ...getColumnSearchProps('author'),
    },
    {
      title: '发布时间',
      dataIndex: 'date',
      key: 'date',
      width: 200,
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      ...getColumnSearchProps('title'),
      render: (title) => (
        <Tooltip placement="topLeft" title={title}>
          {title}
        </Tooltip>
      ),
    },
    {
      title: '评论内容',
      dataIndex: 'content',
      key: 'content',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      ...getColumnSearchProps('content'),
      render: (content) => (
        <Tooltip placement="topLeft" title={content}>
          {content}
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

export default ReviewData;
// ReactDOM.render(<BudgetRevenue />, document.getElementById('container'));
