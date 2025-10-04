import React from 'react';

const TreeForm = ({ 
  form, 
  handleChange, 
  handleSubmit, 
  editId, 
  loading, 
  onCancel 
}) => {
  return (
    <div className="form-container">
      <h2>{editId ? "✏️ Editar Árvore" : "➕ Adicionar Nova Árvore"}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input 
            name="nome" 
            placeholder="Nome Popular *" 
            value={form.nome} 
            onChange={handleChange}
            className="form-input"
            required
          />
          <input 
            name="nomeCientifico"
            placeholder="Nome Científico" 
            value={form.nomeCientifico} 
            onChange={handleChange}
            className="form-input"
          />
        </div>
        
        <div className="form-grid-full">
          <input 
            name="bioma" 
            placeholder="Bioma" 
            value={form.bioma} 
            onChange={handleChange}
            className="form-input"
          />
          <input 
            name="descricao" 
            placeholder="Descrição" 
            value={form.descricao} 
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <input 
          name="imagem" 
          placeholder="URL da Imagem" 
          value={form.imagem} 
          onChange={handleChange}
          className="form-input-full"
          required
        />

        <div className="form-actions">
          {editId ? (
            <>
              <button 
                type="submit"
                disabled={loading}
                className="btn-success"
              >
                {loading ? "💾 Salvando..." : "💾 Salvar Alterações"}
              </button>
              <button 
                type="button"
                onClick={onCancel}
                className="btn-secondary"
              >
                ❌ Cancelar
              </button>
            </>
          ) : (
            <button 
              type="submit"
              disabled={loading || !form.nome.trim()}
              className="btn-primary"
            >
              {loading ? "➕ Adicionando..." : "➕ Adicionar Árvore"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TreeForm;