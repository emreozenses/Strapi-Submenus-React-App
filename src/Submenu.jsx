import React, { useRef } from 'react'
import sublinks from './data'
import { useGlobalContext } from './context';

const Submenu = () => {
  const { pageId,setPageId} = useGlobalContext();
  const currentPage = sublinks.find((item=>item.pageId === pageId));
  
  const submenuContainer = useRef(null);

  const handleMouseOnLeave = (e)=>{
    const submenu = submenuContainer.current;
    const {left,right,bottom} = submenu.getBoundingClientRect();
    const {clientX,clientY} = e;
    if(clientX<left-1||clientX>right-1||clientY>bottom-1){
      setPageId(null);
  }}
  return (
    <div className={currentPage?"submenu show-submenu":'submenu'} 
    onMouseLeave={handleMouseOnLeave}
    ref={submenuContainer}>

              <h5>{currentPage?.page}</h5>
              <div className="sub-link-container">
                {currentPage?.links.map((link) => {
                  const { id, label, icon, url } = link
                  return (
                    <button type="button" className="sub-link" key={id}>
                      {icon}
                      <a href={url}>{label}</a>
                    </button>
                  )
                })}
              </div>
         
    
    </div>
  )
}

export default Submenu