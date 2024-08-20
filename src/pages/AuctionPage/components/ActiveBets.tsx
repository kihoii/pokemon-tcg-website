import './Components.scss';
import { AuctionCard } from './AuctionCard/AuctionCard.tsx';
import { AuctionCardActiveResponse } from '../../../models/ResponseModels/AuctionCardActiveResponse.tsx';
export const ActiveBets = () => {
    
    const auctionCardList: AuctionCardActiveResponse[] = [
        {
            id: 1,
            name: 'card1',
            owner: 'sdsdsasx',
            lastBet: 1445,
            timeEnd: '12:23',
            date: '12.08'
          },

          {
            id: 2,
            name: 'card2',
            owner: 'dcdcdsdc',
            lastBet: 21,
            timeEnd: '21:54',
            date: '12.08'
          },

          {
            id: 3,
            name: 'card3',
            owner: 'fgrbrs',
            lastBet: 325,
            timeEnd: '22:07',
            date: '12.08'
          },

          {
            id: 4,
            name: 'card4',
            owner: 'asdfgh',
            lastBet: 134,
            timeEnd: '03:07',
            date: '12.08'
          },
    ]
    return (
        <div className='page'>
            <h1>Here you can see the current auctions in which you participate</h1>
            <div className='cards'> 
            {auctionCardList.map((card) => (
          <AuctionCard
            type="active"
            card={{ ...card }}
          />
        ))}
        </div>
        </div>
        
    )
                          
}