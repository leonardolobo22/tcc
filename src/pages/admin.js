import React, { useState, useEffect, useCallback } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import LoginForm from "./LoginForm";
import TreeForm from "./TreeForm";
import TreeList from "./TreeList";
import './admin.css';

function Admin() {
  // Estados principais
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [arvores, setArvores] = useState([]);
  const [form, setForm] = useState({ 
    nome: "", 
    nomeCientifico: "", 
    bioma: "", 
    descricao: "", 
    imagem: "" 
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Monitor de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      
      if (currentUser) {
        carregarArvores();
      } else {
        setArvores([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Carregar árvores
  const carregarArvores = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    
    try {
      const colecaoRef = collection(db, "arvores");
      const snapshot = await getDocs(colecaoRef);
      
      const arvoresCarregadas = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setArvores(arvoresCarregadas);
    } catch (error) {
      setMessage(`❌ Erro ao carregar árvores: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
  if (user) {
    carregarArvores();
  }
}, [user, carregarArvores]);

  // Handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (message) setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (editId) {
      await atualizarArvore();
    } else {
      await adicionarArvore();
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setMessage(`❌ Erro no logout: ${error.message}`);
    }
  };

  // CRUD Operations
  const adicionarArvore = async () => {
    if (!user || !form.nome.trim()) return;

    setLoading(true);
    
    try {
      const dadosParaSalvar = {
        nome: form.nome.trim(),
        nomeCientifico: form.nomeCientifico.trim(),
        bioma: form.bioma.trim(),
        descricao: form.descricao.trim(),
        imagem: form.imagem.trim(),
        criadoEm: new Date().toISOString(),
        criadoPor: user.email
      };

      const colecaoRef = collection(db, "arvores");
      await addDoc(colecaoRef, dadosParaSalvar);

      
      await carregarArvores();
    } catch (error) {
      setMessage(`❌ Erro ao adicionar: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const editarArvore = (arv) => {
    setForm({
      nome: arv.nome || "",
      nomeCientifico: arv.nomeCientifico || "",
      bioma: arv.bioma || "",
      descricao: arv.descricao || "",
      imagem: arv.imagem || ""
    });
    setEditId(arv.id);
  };

  const atualizarArvore = async () => {
    if (!user || !editId) return;
    
    setLoading(true);
    
    try {
      const dadosAtualizados = {
        nome: form.nome.trim(),
        nomeCientifico: form.nomeCientifico.trim(),
        bioma: form.bioma.trim(),
        descricao: form.descricao.trim(),
        imagem: form.imagem.trim(),
        atualizadoEm: new Date().toISOString(),
        atualizadoPor: user.email
      };

      const arvRef = doc(db, "arvores", editId);
      await updateDoc(arvRef, dadosAtualizados);
      
      setForm({ nome: "", nomeCientifico: "", bioma: "", descricao: "", imagem: "" });
      setEditId(null);
      setMessage("✅ Árvore atualizada com sucesso!");
      
      await carregarArvores();
    } catch (error) {
      setMessage(`❌ Erro ao atualizar: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deletarArvore = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir esta árvore?")) {
      return;
    }

    setLoading(true);
    
    try {
      await deleteDoc(doc(db, "arvores", id));
      setMessage("✅ Árvore deletada com sucesso!");
      await carregarArvores();
    } catch (error) {
      setMessage(`❌ Erro ao deletar: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const cancelarEdicao = () => {
    setForm({ nome: "", nomeCientifico: "", bioma: "", descricao: "", imagem: "" });
    setEditId(null);
  };

  // Loading inicial
  if (authLoading) {
    return <div className="loading">🔄 Verificando autenticação...</div>;
  }

  // Tela de login
  if (!user) {
    return <LoginForm />;
  }

  // Tela principal
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">🌳 Painel do Administrador</h1>
        <div className="user-info">
          <span className="user-email">👤 {user.email}</span>
          <button onClick={handleLogout} className="logout-btn">
            🚪 Sair
          </button>
        </div>
      </div>

      {message && (
        <div className={`alert ${message.includes('❌') ? 'alert-error' : 'alert-success'}`}>
          {message}
        </div>
      )}

      <TreeForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editId={editId}
        loading={loading}
        onCancel={cancelarEdicao}
      />

      <TreeList
        arvores={arvores}
        onEdit={editarArvore}
        onDelete={deletarArvore}
        loading={loading}
      />
    </div>
  );
}

export default Admin;