import  './UserAccountPage.scss';
import headimg  from './header.png';
import avatar  from './avatar.png';
import {
    TwitterOutlined,
    GlobalOutlined,
    YoutubeOutlined,
  } from '@ant-design/icons';
  import { Button, Flex, Typography} from 'antd';

const { Title } = Typography;


export const UserAccountPage = () => {
    return (
        <div>
           <section id="header-section"> 
                <img src={headimg} alt="Cover Image" className="cover-image"/>
                <img src={avatar} alt="Avatar" className="avatar"/>
                </section>
            <section id="info-section">
                <div className='left-container container'>
                <Title  className='mrg' level={1}>Animakid</Title>
                <div className='grid mrg'>
                    <h2>250k+</h2>
                    <h2>50+</h2>
                    <h2>3000+</h2>
                    <h3>Карточек</h3>
                    <h3>Коллекций(??)</h3>
                    <h3>Подписчиков</h3>
                </div>
                <div className='mrg'>
                    <h3 className='grey'>Описание</h3>
                    <h3>The internet's friendliest designer kid.</h3>
                </div>
                <div className='mrg'>
                    <h3 className='grey' style={{  marginBottom: '10px'}}>Ссылки</h3>
                    <GlobalOutlined style={{ fontSize: '32px', marginRight: '20px'}}/>
                    <TwitterOutlined style={{ fontSize: '32px', marginRight: '20px' }}/>
                    <YoutubeOutlined style={{ fontSize: '32px' }}/>
                </div>
                </div>
                <div className='right-container'>
                    <Button type="primary">Подписаться</Button>
                </div>
            </section>
            <section id="sort-section">
            <div className='buttons-cotainer'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type="text"> <h2>Карточки</h2></Button>
                    <div className="circle">25</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type="text"><h2>Коллекции</h2></Button>
                    <div className="circle">36</div>
                </div>
            </div>
            </section>
        </div>
        
    )
}