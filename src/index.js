import React from 'react';
import ReactDOM from 'react-dom';
import './base/_general.scss';
import AppHeader from './AppHeader/AppHeader';
import Promo from './Promo/Promo';
import TokenBenefits from './TokenBenefits/TokenBenefits';
import AboutNimble from './AboutNimble/AboutNimble';
import TokenUsage from './TokenUsage/TokenUsage';
import TokenStaking from './TokenStaking/TokenStaking';
import TokenFeatures from './TokenFeatures/TokenFeatures';
import TokenSale from './TokenSale/TokenSale';
import PartnerProgram from './PartnerProgram/PartnerProgram';
import Kibotron from './Kibotron/Kibotron';
import Footer from './Footer/Footer';

function App() {
    //style={{ backgroundImage: 'url(img/promo.jpg)' }}
    return (
        <div className="wrapper" style={{ backgroundImage: 'url(img/promo.jpg)' }}>
            <AppHeader />
            <main className="page">
                <Promo title="Присоединяйся к революции в мире гемблинга" text="100% честность игры и распределения средств" btn="Открыть аккаунт" />
                <TokenBenefits />
                <AboutNimble title="Nimble Token" />
                <TokenUsage title="Применение токена" />
                <TokenStaking title="Стейкинг Nimble Token" revenue="Доход на стейкинг" />
                <TokenFeatures title="Характеристики Nimble Token" />
                <TokenSale title="Token Sale" button="Принять участие" />
                <PartnerProgram title="Парнерская программа" />
                <Kibotron />
            </main>
            <Footer email="kibotronmedia@gmail.com" />
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
