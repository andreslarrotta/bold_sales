import React from 'react'

import './Filters.css'

export const Filters = () => {

    return (
        <div className='filters'>
            <div className='filters--tabs'>
                <ul>
                    <li>Hoy</li>
                    <li>Esta semana</li>
                    <li>Septiembre</li>
                </ul>
            </div>
            <div className='filters--filter'>
                <div className='filters--filter-title'>
                    Filtrar
                    <span class="material-symbols-outlined">
                        tune
                    </span>
                </div>
            </div>
        </div>
    )
}