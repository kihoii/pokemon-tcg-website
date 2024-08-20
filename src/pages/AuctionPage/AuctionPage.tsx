import './AuctionPage.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { ActiveBets } from './components/ActiveBets.tsx';
import { Purchases } from './components/Purchases.tsx';
import { History } from './components/History.tsx';


const onChange = (key: string) => {
    console.log(key);
    };

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Active bets',
        children: <ActiveBets />,
    },
    {
        key: '2',
        label: 'Purchases',
        children: <Purchases />,
    },
    {
        key: '3',
        label: 'History',
        children: <History />,
    },
    ];


export const AuctionPage = () => {
    
        return (
            <div > <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        )
                              
}
