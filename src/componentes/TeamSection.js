import React from 'react';
import './TeamSection.css';

export default function TeamSection() {
  const developers = [
    { name: 'Ana Laura', role: 'Desenvolvedora', image: '/image.png' },
    { name: 'Jade', role: 'Desenvolvedora', image: '/image.png' },
    { name: 'Leonardo', role: 'Desenvolvedor', image: '/image.png' },
    { name: 'Sabrina', role: 'Desenvolvedora', image: '/image.png' }
  ];

  const advisors = [
    { name: 'Ademir', role: 'Orientador', image: '/image.png' },
    { name: 'Danilo', role: 'Orientador', image: '/image.png' },
    { name: 'Silvia', role: 'Orientadora', image: '/image.png' }
  ];

  return (
    <div className="team-section2">
      <div className="team-header">
        <h2 className="team-title">Nossa Equipe</h2>
        <p className="team-subtitle">Conheça as pessoas que tornaram este projeto possível</p>
      </div>

      <div className="team-category">
        <h3 className="category-title">Desenvolvedores</h3>
        <div className="team-grid">
          {developers.map((person, index) => (
            <div key={index} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-inner">
                <div className="card-image-wrapper">
                  <img src={person.image} alt={person.name} className="card-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h4 className="card-name">{person.name}</h4>
                  <p className="card-role">{person.role}</p>
                </div>
                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-category">
        <h3 className="category-title">Orientadores</h3>
        <div className="team-grid advisor-grid">
          {advisors.map((person, index) => (
            <div key={index} className="team-card advisor-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-inner">
                <div className="card-image-wrapper">
                  <img src={person.image} alt={person.name} className="card-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h4 className="card-name">{person.name}</h4>
                  <p className="card-role">{person.role}</p>
                </div>
                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}