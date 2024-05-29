/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listar, deletar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { toastAlerta } from "../../../utils/toastAlerta";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`categorias/${id}`, setCategoria);
    } catch (error: any) {
      toastAlerta("Categoria não encontrada. Tente novamente.", "info");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      toastAlerta("Categoria apagada com sucesso.", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a Categoria.", "erro");
    }
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-3xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-red-700/20 text-black font-bold text-xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-100 font-bold h-full">
          {categoria.nome}
        </p>
        <div className="flex">
          <button
            className="w-full hover:text-stone-100 bg-cyan-500 hover:bg-cyan-800 py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full hover:text-stone-100 bg-red-300 hover:bg-red-800 py-2"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;