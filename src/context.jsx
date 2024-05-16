import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext =()=>useContext(GlobalContext);

const AppContext = ({children})=>{

    const [isSidebarOpen,setSidebarOpen] = useState(false);

    const OpenSidebar = ()=>setSidebarOpen(true);
    const CloseSidebar = ()=>setSidebarOpen(false);

    return(
        <GlobalContext.Provider value={{isSidebarOpen,setSidebarOpen,OpenSidebar,CloseSidebar}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext