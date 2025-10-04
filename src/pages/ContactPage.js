import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contato & Equipe</h1>

      <section className="team-section">
        <h2>Equipe de Desenvolvimento</h2>
        <ul className="team-list">
          <li>
            <strong>Ana Laura Raffa</strong> – <a href="mailto:ana.raffa@fatec.sp.gov.br">ana.raffa@fatec.sp.gov.br</a>
          </li>
          <li>
            <strong>Sabrina Tomaz Barbosa</strong> – <a href="mailto:sabrina.barbosa2@fatec.sp.gov.br">sabrina.barbosa2@fatec.sp.gov.br</a>
          </li>
          <li>
            <strong>Leonardo Correa Lobo</strong> – <a href="mailto:lobo@fatec.sp.gov.br">lobo@fatec.sp.gov.br</a>
          </li>
          <li>
            <strong>Ademir</strong> – <a href="mailto:ademir@fatec.sp.gov.br">ademir@fatec.sp.gov.br</a>
          </li>
          <li>
            <strong>Danilo</strong> – <a href="mailto:danilo@fatec.sp.gov.br">danilo@fatec.sp.gov.br</a>
          </li>
          <li>
            <strong>Silvia</strong> – <a href="mailto:silvia@fatec.sp.gov.br">silvia@fatec.sp.gov.br</a>
          </li>
        </ul>
      </section>

      <section className="institution-section">
        <h2>Fatec Itapetininga</h2>
        <p>
          <strong>Website:</strong> <a href="https://fatecitapetininga.edu.br/" target="_blank" rel="noopener noreferrer">https://fatecitapetininga.edu.br/</a>
        </p>
        <p>
          <strong>Endereço:</strong> Rua Dr. João Vieira de Camargo, 104 - Itapetininga - SP
        </p>
        <p>
          <strong>Telefones:</strong> Secretaria: (15) 3273-8011
        </p>
        <p>
          <strong>Horário de Funcionamento:</strong> Seg-Sex 7:40-23:05
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
