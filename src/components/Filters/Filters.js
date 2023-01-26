import React from 'react'

import './Filters.css'
import { useSales } from '../../context/sales-context'
export const Filters = () => {
    const { view, setStateView } = useSales()

    const handleView = (newView) => {
        setStateView(newView)
    }

    return (
        <div className='filters'>
            <div className='filters--tabs'>
                <ul>
                    <li
                        className={view === 'Today' ? 'filters--tabs-active' : ''}
                        onClick={() => { handleView('Today') }}
                    >
                        Hoy
                    </li>
                    <li
                        className={view === 'Week' ? 'filters--tabs-active' : ''}
                        onClick={() => { handleView('Week') }}
                    >
                        Esta semana
                    </li>
                    <li
                        className={view === 'Septiembre' ? 'filters--tabs-active' : ''}
                        onClick={() => { handleView('Septiembre') }}
                    >
                        Septiembre
                    </li>
                </ul>
            </div>
            <div className='filters--filter'>
                <div className='filters--filter-title'>
                    Filtrar
                    <span className="material-symbols-outlined">
                        tune
                    </span>
                </div>
            </div>
        </div>
    )
}