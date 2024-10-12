import { Link } from 'react-router-dom'



export default function Header() {

  return (
    <header className='border-2 rounded-xl'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              alt=""
              src='/src/assets/logo_movie_site.webp'
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
