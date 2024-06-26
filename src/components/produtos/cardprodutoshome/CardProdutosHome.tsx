import Produto from "../../../models/Produto"

interface CardProdutoProps {
  produto: Produto
}

function CardProdutosHome({ produto }: CardProdutoProps) {

  return (
    <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white'>
      <div className='py-4'>

        <img src={produto.foto} className='mt-1 h-40 max-w-75 mx-auto' alt="" />

        <div className='p-4'>
          <p className='text-sm text-center uppercase'>{produto.nome}</p>
          <h3 className='text-xl text-center font-bold uppercase'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(produto.preco)}
          </h3>
          <p className='text-sm italic text-center'>Categoria: {produto.categoria?.nome}</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button className='w-full text-white bg-indigo-600 hover:bg-green-700 flex items-center justify-center py-2'>Comprar</button>
      </div>
    </div>
  )
}

export default CardProdutosHome