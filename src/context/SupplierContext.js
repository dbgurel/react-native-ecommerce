import React, { createContext, useState } from 'react'



const SupplierContext = createContext(null)

export const SupplierProvider = ({children}) => {

    const [addedsupplier, setAddedSupplier] = useState(0)

    const values = {
        addedsupplier,
        setAddedSupplier
    }

    return <SupplierContext.Provider value={values}>{children}</SupplierContext.Provider>
}

export default SupplierContext
