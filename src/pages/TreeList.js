import React from 'react';

import { Link } from "react-router-dom";

const TreeList = ({ arvores, onEdit, onDelete, loading }) => {
  if (loading) {
    return <div className="loading">🔄 Carregando árvores...</div>;
  }

  if (arvores.length === 0) {
    return (
      <div className="trees-section">
        <h2>🌳 Árvores Cadastradas (0)</h2>
        <div className="empty-state">
          🌱 Nenhuma árvore cadastrada ainda.<br/>
          <small>Adicione a primeira árvore usando o formulário acima!</small>
        </div>
      </div>
    );
  }

  return (
    <div className="trees-section">
      <h2>🌳 Árvores Cadastradas ({arvores.length})</h2>
      
      <div className="trees-grid">
        {arvores.map((arv) => (
          <div key={arv.id} className="tree-card">
            {arv.imagem && (
              <img 
                src={arv.imagem} 
                alt={arv.nome} 
                className="tree-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }} 
              />
            )}
            
            <div className="tree-info">
              <h3 className="tree-name">{arv.nome}</h3>
              <p className="tree-scientific">
                <em>{arv.nomeCientifico}</em>
              </p>
              <p className="tree-details">
                {arv.bioma} • {arv.descricao}
              </p>
            </div>
            
            <div className="tree-actions">
              <button 
                onClick={() => onEdit(arv)} 
                disabled={loading}
                className="btn-edit"
              >
                ✏️ Editar
              </button>
              <button 
                onClick={() => onDelete(arv.id)} 
                disabled={loading}
                className="btn-delete"
              >
                🗑️ Excluir
              </button>

<ul>
        {arvores.map((arv) => (
          <li key={arv.id}>
            <h2>{arv.nome}</h2>
            {/* botão/link para detalhes */}
            <Link to={`/arvore/${arv.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeList;