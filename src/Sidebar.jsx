import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './context';
import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
  FaTimes,
} from 'react-icons/fa'
import { nanoid } from 'nanoid'

const Sidebar = () => {

  const { isSidebarOpen, setSidebarOpen, OpenSidebar, CloseSidebar } =useGlobalContext();
  return (
    <div className= { isSidebarOpen?'sidebar-container show-sidebar-container':'sidebar-container'}>
      <button type='button' className='closeSidebar-btn' onClick={CloseSidebar}><FaTimes/></button>
      <ul>
        {sublinks.map((mainLinks)=>{
          const {pageId,page,links} = mainLinks;
          return (
            <li key={pageId}>
              <h4>{page}</h4>
              <div className="link-container">
                {links.map((link) => {
                  const { id, label, icon, url } = link
                  return (
                    <button type="button" className="link" key={id}>
                      {icon}
                      <a href={url}>{label}</a>
                    </button>
                  )
                })}
              </div>
            </li>
          )})}
        
      </ul>
    </div>
  )
}

export default Sidebar