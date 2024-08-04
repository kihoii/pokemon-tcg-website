import { Logo } from '../Logo/Logo';
import './Footer.scss';
import discord from '../../assets/sns-logos/DiscordLogo.svg';
import twitter from '../../assets/sns-logos/TwitterLogo.svg';
import youtube from '../../assets/sns-logos/YoutubeLogo.svg';
import { Link } from 'react-router-dom';
import { SubscribeInput } from '../SubscribeInput/SubscribeInput';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-main container">
        <div className="footer-block about">
          <div className="footer-block-head">
            <Logo />
          </div>
          <div className="footer-block-sub">
            <div>
              Pokémon TCG created <br />
              for collectors and enjoyers
            </div>
            <div>
              <div>Join our community</div>
              <div className="sns-links">
                <img src={discord} alt="Discord" />
                <img src={twitter} alt="Twitter" />
                <img src={youtube} alt="YouTube" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-block">
          <div className="footer-block-head">Explore</div>
          <div className="footer-block-sub">
            <Link to="/market">Marketplace</Link>
            <Link to="/ranking">Ranking</Link>
            <Link to="/wallet">Connect a wallet</Link>
          </div>
        </div>
        <div className="footer-block">
          <div className="footer-block-head">Join Our Weekly Digest</div>
          <div className="footer-block-sub">
            <div>
              Get exclusive promotions & updates <br />
              straight to your inbox.
            </div>
            <SubscribeInput />
          </div>
        </div>
      </div>
      <div className="footer-credits container">
        <div className="footer-block-sub">
          <hr />
          <div>Ⓒ Pokémon TCG</div>
        </div>
      </div>
    </footer>
  );
};
