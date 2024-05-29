import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-indigo-800 text-white flex justify-center">
      <div className="container items-center flex text-lg justify-between">
        <div>
          <Link to="/home" className="text-2xl font-bold uppercase flex gap-2 items-center">
            <img src="https://ik.imagekit.io/4lf7m2y5a/clinica.png?updatedAt=1716991249510" alt="" />
            <p>Farmácia Cura Tudo</p>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/produtos" className="hover:underline">
            Produtos
          </Link>
          <Link to="/cadastroCategoria" className="hover:underline">
            Cadastrar categorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;