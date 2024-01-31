function Navbar() {
 
    return (
      <>
       <div className='w-full bg-indigo-900 text-white flex justify-center py-6'>
            <div className="container flex justify-between text-lg">
              <div className='text-2xl font-bold uppercase'>Farmacia De todos</div>
  
              <div className='flex gap-4'>
                <div className='hover:underline'>Produtos</div>
                <div className='hover:underline'>Categorias</div>
                <div className='hover:underline'>Cadastrar categoria</div>
                <div className='hover:underline'>Perfil</div>
                <div className='hover:underline'>Sair</div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar