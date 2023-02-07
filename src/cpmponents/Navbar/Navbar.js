
const Navbar = () => {
  return (
    <nav className="container ">
        <div className="flex items-center justify-between py-5">
            <div className="logo">
                <img src="./images/logo.png" alt="#"/>
            </div>
            {/* <div className="">
              <button>
                <i class=" icon fa-solid fa-bars"></i>
              </button>
            </div> */}
            <ul className='flex items-center justify-center'>
                <li className="px-5"><a href="#">Home</a></li>
                <li className="px-5"><a href="#">Program</a></li>
                <li className="px-5"><a href="#">Blog</a></li>
                <li className="px-5"><a href="#">About us</a></li>
                <a className="log-in mx-5 pimary-btn px-6 py-2" href="#">log in</a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar