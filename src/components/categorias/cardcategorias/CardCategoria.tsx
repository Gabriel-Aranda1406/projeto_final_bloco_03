import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-red-700/20 text-black font-semibold justify-between">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-slate-100 font-bold h-full">
        {categoria.nome}
      </p>
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className=" w-full hover:text-stone-100 bg-cyan-500 hover:bg-cyan-800 flex item-center justify-center py-2"
        >
          Editar
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="w-full hover:text-stone-100 bg-red-300 hover:bg-red-800 flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;