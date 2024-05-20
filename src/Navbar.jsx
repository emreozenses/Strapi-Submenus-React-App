import React from 'react'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'



const Navbar = () => {

    const {isSidebarOpen,setSidebarOpen,OpenSidebar,CloseSidebar,setPageId} = useGlobalContext();

    const handleSubmenu = (e)=>{
      if(!e.target.classList.contains('nav-link')){

        setPageId(null);
      }
    };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <div className="nav-links">
          {sublinks.map((mainLinks) => {
            const { pageId, page, links } = mainLinks
            return (
              <button
                className="nav-link"
                key={pageId}
                onMouseEnter={() => setPageId(pageId)}
              >
                {page}
              </button>
            )
          })}
        </div>
        <button type="button" className="toggle-btn" onClick={OpenSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar