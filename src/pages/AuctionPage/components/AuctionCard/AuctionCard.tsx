import './AuctionCard.scss';
import cardpic  from './card.png';
import { Button} from 'antd';
import { AuctionCardActiveResponse } from '../../../../models/ResponseModels/AuctionCardActiveResponse';
import { getCards } from '../../../../api/helpers.tsx';
import { useQuery } from 'react-query';
import { CardItem } from '../../../../components/CardItem/CardItem';

interface AuctionCardInfo {
    type: string;
    card: AuctionCardActiveResponse;
  }

  

export function AuctionCard ({ type, card }: AuctionCardInfo): React.JSX.Element {
    const { owner, lastBet, timeEnd , date} = card;
    const { data: cards, error, isLoading } = useQuery('cards', getCards);
    return (
        <div className={`card ${type}`}> 
        
            <div > <img className='pic' src={cardpic} alt="card" /></div>
            <div className='inf'>
                <h2 className="seller">Seller:<b> @{owner} </b></h2>
                <h2 className="last-bet">Last bet: <b>{lastBet} $</b></h2>
                <h2 className="user-bet">Your bet: <b>{lastBet+89} $</b></h2>
                <h2 className="time-to-end">Time to the end: <b>{timeEnd}</b></h2>
                <h2 className="date">Date: <b>{date}</b></h2>
                <Button className='button' type="primary" htmlType="submit">
                        See
                    </Button>
            </div>
            
    </div>
    )
                          
}