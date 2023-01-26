import React, { useState } from 'react'
import { gsap } from "gsap";

import './Filters.css'
import { useSales } from '../../context/sales-context'
export const Filters = () => {
    const { view, setStateView } = useSales()
    const [open, setOpen] = useState(false)

    const handleView = (newView) => {
        setStateView(newView)
    }

    const handleOpenFilter = () => {
        gsap.to(`.icon_filter`, {
            opacity: 0,
            x: 10,
            duration: 0.5,
            onComplete: () => {
                gsap.to(`.filters--filter-content`, {
                    opacity: 1,
                    height: 200,
                    padding: '1rem',
                    duration: 0.5,
                    onComplete: () => {
                        setOpen(true)
                    }
                });
            }
        });
    }

    const handleCloseFilter = () => {
        gsap.to(`.filters--filter-content`, {
            opacity: 0,
            height: 0,
            padding: 0,
            duration: 0.5,
            onComplete: () => {
                gsap.to(`.icon_filter`, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    onComplete: () => {
                        setOpen(false)
                    }
                });
            }
        });
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
                <div className={`filters--filter_container ${open && 'filter--open'}`}>
                    <div className='filters--filter-title' onClick={handleOpenFilter}>
                        Filtrar
                        <span className="icon_filter material-symbols-outlined">
                            tune
                        </span>
                    </div>
                    <div className='filters--filter-content'>
                        <span
                            className="icon_filter--close material-symbols-outlined"
                            onClick={handleCloseFilter}
                        >
                            close
                        </span>
                        <ul>
                            <li>
                                <div>
                                    <input type="radio" id="datafono" name="filter" value="datafono" />
                                    <label htmlFor="datafono">Cobro con datáfono</label>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <input type="radio" id="link" name="filter" value="link" />
                                    <label htmlFor="link">Cobros con link de pago</label>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <input type="radio" id="all" name="filter" value="all" />
                                    <label htmlFor="all">Ver todos</label>
                                </div>
                            </li>
                        </ul>
                        <button>Aplicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}