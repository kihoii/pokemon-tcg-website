import { AuctionsParticipatedTab } from './components/AuctionsParticipatedTab/AuctionsParticipatedTab';
import { Tabs, TabsProps } from 'antd';
import './UserParticipatedAuctionsPage.scss';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: <AuctionsParticipatedTab />,
  },
  {
    key: '2',
    label: 'Active',
    children: <AuctionsParticipatedTab isAborted={false} isFinished={false} />,
  },
  {
    key: '3',
    label: 'Finished',
    children: <AuctionsParticipatedTab isFinished={true} />,
  },
  {
    key: '4',
    label: 'Aborted',
    children: <AuctionsParticipatedTab isAborted={true} />,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

export const UserParticipatedAuctionsPage = () => {
  return (
    <div className="participated-auctions">
      <div className="container">
        <h2>Auctions you have participated in</h2>
        <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
      </div>
    </div>
  );
};
