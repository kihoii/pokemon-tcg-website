import './BuyPage.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { ActiveAuctions } from './components/SaleCardPages/ActiveAuctions.tsx';
import { History } from './components/SaleCardPages/History.tsx';


const onChange = (key: string) => {
    console.log(key);
    };

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Active auctions',
        children: <ActiveAuctions />,
    },
    {
        key: '2',
        label: 'History',
        children: <History />,
    },
    ];


export const SalePage = () => {
    
        return (
            <div > <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        )
                              
}
