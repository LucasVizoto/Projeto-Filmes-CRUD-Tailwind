import { Link } from 'react-router-dom'


export default function Example() {

  return (
    <header className='border-2 rounded-xl'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="https://images.vexels.com/media/users/3/299280/isolated/preview/6867d8104ecb9a14cc7e7c6c2ca645dc-claquete-azul.png"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <Link className="bg-green-900 px-2 py-1  rounded-lg text-center
      hover:border-2 hover:border-b-slate-50" 
      to='/add'>Add Filme</Link>
      </nav>

    </header>
  )
}
