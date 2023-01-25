import React from 'react'

import './Sales.css'

export const Sales = () => {

    return (
        <div className='sales'>
            <div className='sales_container'>
                <div className='sales_top'>
                    <div className='sales_top--total'>
                        Total de ventas
                    </div>
                    <div className='sales_top--filters'>
                        Hoy Esta semanaa septiembre
                        y el filtro
                    </div>
                </div>
                <div className='sales_result'>
                    tus ventas de septiempre
                </div>
            </div>
        </div>
    )
}