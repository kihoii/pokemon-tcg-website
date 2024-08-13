import './AuctionPage.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Buy } from './components/BuyComponent/Buy.tsx';
import { Sale } from './components/SaleComponent/Sale.tsx';

const onChange = (key: string) => {
    console.log(key);
    };

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Buy card',
        children: <Buy />,
    },
    {
        key: '2',
        label: 'Sale card',
        children: <Sale />,
    },
    ];


export const AuctionPage = () => {
    
        return (
            <div > <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        )
                              
}
