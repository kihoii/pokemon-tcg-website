import { Tabs, TabsProps } from 'antd';
import './UserCreatedAuctionsPage.scss';
import { AuctionsCreatedTab } from './components/AuctionsCreatedTab/AuctionsCreatedTab';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: <AuctionsCreatedTab />,
    forceRender: true,
  },
  {
    key: '2',
    label: 'Active',
    children: <AuctionsCreatedTab isAborted={false} isFinished={false} />,
    forceRender: true,
  },
  {
    key: '3',
    label: 'Finished',
    children: <AuctionsCreatedTab isFinished={true} />,
    forceRender: true,
  },
  {
    key: '4',
    label: 'Aborted',
    children: <AuctionsCreatedTab isAborted={true} />,
    forceRender: true,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

export const UserCreatedAuctionsPage = () => {
  return (
    <div className="created-auctions">
      <div className="container">
        <h2>Auctions you have created</h2>
        <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
      </div>
    </div>
  );
};
