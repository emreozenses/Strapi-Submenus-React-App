import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext =()=>useContext(GlobalContext);

const AppContext = ({children})=>{

    const [pageId,setPageId] = useState(null);
    const [isSidebarOpen,setSidebarOpen] = useState(false);

    const OpenSidebar = ()=>setSidebarOpen(true);
    const CloseSidebar = ()=>setSidebarOpen(false);

    return(
        <GlobalContext.Provider value={{isSidebarOpen,setSidebarOpen,OpenSidebar,CloseSidebar,pageId,setPageId}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext