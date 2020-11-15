import React, { useContext, useState, useMemo } from 'react';
import{getEmpresaPorId} from "controller/empresa.controller"

const DividerContext = React.createContext();
const DividerActionsContext = React.createContext();

function DividerProvider({ children }) {
    const [flag, setFlagValue] = useState(true);
    const [empresasLanzar,setEmpresasLanzar] = useState([]);

    const actions = useMemo(() => {
        const setFlag = flagValue => setFlagValue(flagValue);
        const  setEmpresas = empresasValues => setEmpresasLanzar(empresasValues)

        return {
            setFlag,
            setEmpresas
        }
    }, [setFlagValue,setEmpresasLanzar]);

    return (
        <DividerContext.Provider value={{bandera:flag,empresas:empresasLanzar}}>
            <DividerActionsContext.Provider value={actions}>
                {children}
            </DividerActionsContext.Provider>
        </DividerContext.Provider>
    )
}

function useDividerState() {
    const context = useContext(DividerContext);
    if (context === undefined) {
        throw new Error('useDividerState must be called within a DividerProvider');
    }

    return context;
}

function useDividerActions() {
    const context = useContext(DividerActionsContext);
    if (context === undefined) {
        throw new Error('useDividerActions must be called within a DividerProvider');
    }

    return context;
}

export { DividerProvider, useDividerState, useDividerActions };