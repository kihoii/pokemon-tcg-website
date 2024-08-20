import React from 'react';
import './AuctionMarketplacePage.scss';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { auctionsMock } from '../../mock/AuctionsMock';
import { AuctionResponse } from '../../models/ResponseModels/AuctionResponse';

const auctions = auctionsMock.map((x) => ({
  id: x.id,
  cardName: x.card?.id,
  currentPrice: x.currentPrice,
  minStep: x.minStep,
  createdAt: x.createdAt,
  activeTime: x.activeTime,
}));

const nameFilters = auctions.map((x) => ({
  text: x.cardName,
  value: x.cardName,
}));

const columns: TableColumnsType<AuctionResponse> = [
  {
    key: 'card',
    title: 'Card',
    dataIndex: 'cardName',
    filters: nameFilters,
    onFilter: (value, record) =>
      record.cardName?.indexOf(value as string) === 0,
  },
  {
    key: 'currentPrice',
    title: 'Price',
    dataIndex: 'currentPrice',
  },
  {
    key: 'step',
    title: 'Step',
    dataIndex: 'minStep',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.minStep - b.minStep,
  },
  {
    key: 'activeTime',
    title: 'Time left',
    dataIndex: 'activeTime',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.activeTime - b.activeTime,
  },
  {
    key: 'createdAt',
    title: 'Created Time',
    dataIndex: 'createdAt',
  },
];

const onChange: TableProps<AuctionResponse>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

export function AuctionMarketplacePage(): React.JSX.Element {
  return (
    <Table
      columns={columns}
      rowKey={(x) => x.id}
      dataSource={auctions}
      onChange={onChange}
      showSorterTooltip={{ target: 'full-header' }}
      onRow={(auction, rowIndex) => {
        return {
          onClick: () => {
            window.location.assign('/auction/' + auction.id);
          },
        };
      }}
    />
  );
}
