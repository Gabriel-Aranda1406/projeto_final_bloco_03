import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-indigo-800 text-white flex justify-center">
      <div className="container items-center flex text-lg justify-between">
        <Link to="/home" className="text-2xl font-bold uppercase">
          Farmácia Cura Tudo
        </Link>
        <div className="flex gap-8">
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastroCategoria" className="hover:underline">
            Cadastrar Categorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;