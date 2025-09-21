import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./arvore.css";

function ArvorePage() {
  const { id } = useParams();
  const [arvore, setArvore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArvore = async () => {
      try {
        const ref = doc(db, "arvores", id);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setArvore(snap.data());
        }
      } catch (err) {
        console.error("Erro ao carregar árvore:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArvore();
  }, [id]);

  if (loading) return <p className="mensagem">🌱 Carregando árvore...</p>;
  if (!arvore) return <p className="mensagem">❌ Árvore não encontrada.</p>;

  return (
    <div className="arvore-container">
      <h1 className="arvore-nome">{arvore.nome}</h1>
      {arvore.imagem && (
        <img src={arvore.imagem} alt={arvore.nome} className="arvore-imagem" />
      )}
      <div className="arvore-info">
        <h2>Nome Científico: <em>{arvore.nomeCientifico}</em></h2>
        <h2>Bioma: {arvore.bioma}</h2>
        <p>{arvore.descricao}</p>
      </div>
    </div>
  );
}

export default ArvorePage;
