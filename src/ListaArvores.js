import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "./firebaseConfig";
import "./ListaArvores.css";

function ListaArvores() {
  const [arvores, setArvores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState(""); // estado do campo de pesquisa

  useEffect(() => {
    const fetchArvores = async () => {
      try {
        const snapshot = await getDocs(collection(db, "arvores"));
        const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArvores(lista);
      } catch (err) {
        console.error("Erro ao carregar árvores:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArvores();
  }, []);

  if (loading) return <p className="mensagem">🌱 Carregando árvores...</p>;
  if (arvores.length === 0) return <p className="mensagem">❌ Nenhuma árvore cadastrada.</p>;

  // Filtra as árvores pelo nome digitado
  const arvoresFiltradas = arvores.filter(arv =>
    arv.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="arvores-container">
      <h1 className="arvores-title">🌳 Trilhas do Parque</h1>

      {/* Campo de pesquisa */}
      <input
        type="text"
        placeholder="🔎 Pesquisar trilha..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="arvores-pesquisa"
      />

      <div className="arvores-lista">
        {arvoresFiltradas.length > 0 ? (
          arvoresFiltradas.map(arv => (
            <Link key={arv.id} to={`/arvore/${arv.id}`} className="arvore-botao">
              {arv.nome}
            </Link>
          ))
        ) : (
          <p className="mensagem">❌ Nenhuma árvore encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default ListaArvores;
