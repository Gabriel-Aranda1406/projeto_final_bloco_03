import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categorias/listacategoria/ListaCategoria";
import FormularioCategoria from "./components/categorias/formulariocategoria/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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