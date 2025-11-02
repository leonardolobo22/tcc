import React from "react";
import "./Curiosidades.css";

const Plantas = () => {
  return (
    <div className="curiosidade-page">
      <h1>🌳 Plantas e Árvores da Mata Atlântica</h1>
      <p>
        A Mata Atlântica é cheia de árvores enormes e plantas coloridas! Vamos conhecer algumas curiosidades:
      </p>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2015/08/15/03/14/flowers-889177_640.jpg" alt="Orquídea" />
        <p>🌺 <b>Orquídeas:</b> Flores lindas que crescem penduradas nas árvores. Existem mais de 1.000 espécies na Mata Atlântica!</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2017/01/15/06/04/redwood-trees-1980970_1280.jpg" alt="Pau-brasil" />
        <p>🌴 <b>Pau-brasil:</b> Árvore famosa que deu nome ao nosso país. Sua madeira era muito valiosa!</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2024/06/15/07/09/fern-fronds-8831122_1280.jpg" alt="Samambaia" />
        <p>🍃 <b>Samambaias gigantes:</b> Plantas que parecem pequenos arbustos verdes e adoram sombra úmida.</p>
      </div>

      {/* Dicas específicas para explorar plantas */}
      <div className="curiosidade-dicas">
        <h2>💡 Dicas para explorar plantas e árvores</h2>
        <ul>
          <li>🌳 Não suba nas árvores ou quebre galhos.</li>
          <li>🍃 Não arranque flores ou folhas sem permissão. Elas alimentam os animais.</li>
          <li>📸 Observe cores, formas e texturas das plantas e tire fotos lindas.</li>
          <li>🦋 Observe os insetos e borboletas que vivem nas plantas, sem tocar neles.</li>
        </ul>
      </div>
    </div>
  );
};

export default Plantas;
