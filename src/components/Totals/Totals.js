import React from 'react'

import './Totals.css'

export const Totals = () => {

    return (
        <div className='totals'>
            <div className='totals--title'>
                Total de ventas de septiembre
                <span class="material-symbols-outlined">
                    info
                </span>
            </div>
            <div className='totals--result'>
                <h2>$1'560.000</h2>
                <p>Septiembre 2020</p>
            </div>
        </div>
    )
}