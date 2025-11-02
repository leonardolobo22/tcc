import React from "react";
import "./Curiosidades.css";

const Animais = () => {
  return (
    <div className="curiosidade-page">
      <h1>🐒 Animais da Mata Atlântica</h1>
      <p>
        A Mata Atlântica é cheia de animais incríveis! Vamos conhecer alguns:
      </p>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2023/12/25/16/12/animal-8468801_1280.jpg" alt="Macaco-prego" />
        <p>🐒 <b>Macaco-prego:</b> Muito inteligente, sabe usar pedras para quebrar frutas! Ele adora brincar nas árvores.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2017/09/28/20/08/parrot-2796766_1280.jpg" alt="Arara-azul" />
        <p>🦜 <b>Arara-azul:</b> Super colorida e barulhenta! Ela vive em grupos e adora comer frutas da floresta.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2022/08/27/12/20/otter-7414367_640.jpg" alt="Lontra" />
        <p>🦦 <b>Lontra:</b> Excelente nadadora, vive nos rios da Mata Atlântica. Ela constrói tocas perto da água.</p>
      </div>

      {/* Dicas específicas para explorar animais */}
      <div className="curiosidade-dicas">
        <h2>💡 Dicas para observar os animais</h2>
        <ul>
          <li>🚶‍♂️ Caminhe devagar nas trilhas para não assustar os animais.</li>
          <li>🦜 Fique em silêncio e mantenha distância dos bichos.</li>
          <li>🐾 Caminhe nos caminhos marcados e evite pisar em plantas pequenas.</li>
          <li>📸 Tire fotos sem tocar ou perseguir os animais.</li>
        </ul>
      </div>
    </div>
  );
};

export default Animais;
