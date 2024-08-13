import './AuctionCard.scss';
import card  from './card.png';
import { Button} from 'antd';

export const AuctionCard = () => {
    
    return (
        <div className='card'> 
            <div > <img className='pic' src={card} alt="card" /></div>
            <div className='inf'>
                <h2>Seller:<b> @animsjhb </b></h2>
                <h2>Last bet: <b>123$</b></h2>
                <h2>Your bet: <b>101$</b></h2>
                <h2>Time to the end: <b>12:37</b></h2>
                <Button className='button' type="primary" htmlType="submit">
                        See
                    </Button>
            </div>
            
    </div>
    )
                          
}