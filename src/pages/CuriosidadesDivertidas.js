import React from "react";
import "./Curiosidades.css";

const CuriosidadesDivertidas = () => {
  return (
    <div className="curiosidade-page">
      <h1>🌟 Curiosidades da Mata Atlântica</h1>
      <p>Vamos descobrir fatos divertidos sobre a Mata Atlântica:</p>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2017/06/08/08/55/common-toad-2382959_960_720.jpg" alt="Sapo" />
        <p>🐸 Alguns sapos são coloridos e ajudam a floresta a se manter saudável. Se a água está limpa, eles estão felizes!</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2015/03/30/12/39/waterfalls-698541_1280.jpg" alt="Rios e cachoeira" />
        <p>🌧️ A Mata Atlântica tem rios que formam cachoeiras incríveis. Muitas espécies dependem da água limpa para viver.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2020/05/17/06/45/butterfly-5180306_960_720.jpg" alt="Borboleta" />
        <p>🦋 Existem milhares de espécies de borboletas e insetos que tornam a floresta cheia de cores e vida!</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://cdn.pixabay.com/photo/2019/03/07/21/16/tree-4041156_960_720.jpg" alt="Árvore antiga" />
        <p>🌳 Algumas árvores podem viver mais de 500 anos! Elas são testemunhas da história da floresta.</p>
      </div>

      {/* Dicas gerais de exploração */}
      <div className="curiosidade-dicas">
        <h2>💡 Dicas para explorar a floresta</h2>
        <ul>
          <li>🚶‍♂️ Caminhe devagar e com atenção, principalmente perto de rios e lagos.</li>
          <li>🌊 Não jogue lixo na água e respeite os animais aquáticos.</li>
          <li>🦜 Fique em silêncio e observe os animais à distância.</li>
          <li>🗑️ Leve seu lixo embora e mantenha a floresta limpa.</li>
          <li>👀 Use roupas confortáveis, protetor solar e repelente se necessário.</li>
          <li>🌱 Explore com curiosidade e cuidado. Cada folha, cada inseto tem uma história!</li>
        </ul>
      </div>
    </div>
  );
};

export default CuriosidadesDivertidas;
