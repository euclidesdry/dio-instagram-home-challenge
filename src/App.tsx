import React from 'react';

import './assets/styles/style.css';
import instagramLogo from './assets/img/instagram-logo.png';
import instagramPhonesHome from './assets/img/instagram-celular.png';

const App: React.FC = () => (
  <div className="instagram-wrapper">
    <div className="instagram-phone">
        <img src={instagramPhonesHome} alt="Celular com a página do Insta" />
    </div>
    <div className="instagram-continue">
        <div className="group">
            <img src={instagramLogo} className="instagram-logo" alt="instagram logo" />
            <div className="profile-photo">
                <img src="https://github.com/euclidesdry.png" alt="Foto de Perfil - Euclides do Rosário" />
            </div>
            <a href="#" className="instagram-login">Continue como euclidesdry</a>
            <a href="#" className="instagram-logout">Remover conta</a>
        </div>
        <div className="group">
            <p className="not-account">Não és euclidesdry?</p>
            <p className="not-account">
                <span className="link-blue">Alternar contas</span>
                ou
                <span className="link-blue">Inscreva-se</span>
            </p>
        </div>
        <div className="get-the-app">
            <p className="get-app">Baixe o aplicativo</p>
            <div className="download">
                <a href="#" className="app-download"></a>
                <a href="#" className="app-download"></a>
            </div>
        </div>
    </div>
  </div>
);

export default App;