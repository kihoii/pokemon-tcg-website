import './PokemonCardPage.scss';
import placeholder  from './Placeholder.png';
export const UserAccountPage = () => {
    return (
        <div>
            <section id="main-section">
                <div className='left-container'>
                <img src={placeholder} alt="placeholder" />
                </div>
                <div className='right-container'>
                    <h1>Создать аккаунт</h1>
                </div>
            </section>
        </div>
    )
}