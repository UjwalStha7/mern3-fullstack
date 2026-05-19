import { Link } from "react-router-dom"

function Navbar() { 
    return (
        <>
    

<nav className="bgNeutralSecondarySoft fixed w-full z-20 top-0 left-0 border-b border-default">
  <div className="maxWScreen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.png" className="h-7" alt="Diary Logo" />
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Dev Diary</span>
    </Link>

   
    <button
      data-collapse-toggle="navbar-solid"
      type="button"
      className="inline-flex items-center p-2 size-10 justify-center text-sm text-body rounded-base md:hidden
             hover:bg-neutral-secondary-soft hover:text-heading
             focus:outline-hidden focus:ring-2 focus:ring-neutral-tertiary"
      aria-controls="navbar-solid"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
    
      <svg className="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
      </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-solid">
      
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft
                 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-secondary-soft">
        <li>
          <Link to="/create" className="block py-2 px-3 text-heading rounded-xs
                    hover:bg-neutral-tertiary
                    md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0
                    dark:md:hover:bg-transparent">
            Create
          </Link>
        </li>
      </ul>
    </div>

  </div>
</nav>




        </>


    )
}

export default Navbar