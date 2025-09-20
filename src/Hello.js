import React from 'react';

function Hello(){

    return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2e6e3e' }}>
        Perguntas, Sugestões ou Comentários
      </h2>
      <p style={{ textAlign: 'center' }}>
        Compartilhe sua dúvida ou ideia — de forma anônima — e veja o que outros pensam!
      </p>

      <iframe
        src="https://ezkomment.joulev.dev/embed/demo"  // troque pelo seu ID real depois
        title="Fórum Anônimo"
        style={{
          width: '100%',
          height: '500px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop: '20px'
        }}
      />
    </div>
    
  );

}

export default Hello;