import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categorias/listacategoria/ListaCategoria";
import FormularioCategoria from "./components/categorias/formulariocategoria/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import DeletarProduto from "./components/produtos/deletarprodutos/DeletarProduto";
import FormularioProduto from "./components/produtos/formprodutos/FormProduto";
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarproduto" element={<FormularioProduto />} />
            <Route path="/editarproduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
          <Route
            path="/editarCategoria/:id"
            element={<FormularioCategoria />}
          />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;