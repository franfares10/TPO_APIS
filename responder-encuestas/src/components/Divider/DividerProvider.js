import React, { useContext, useState, useMemo } from 'react';

const DividerContext = React.createContext();
const DividerActionsContext = React.createContext();

function DividerProvider({ children }) {
    const [flag, setFlagValue] = useState(true);

    const actions = useMemo(() => {
        const setFlag = flagValue => setFlagValue(flagValue);

        return {
            setFlag
        }
    }, [setFlagValue]);

    return (
        <DividerContext.Provider value={flag}>
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