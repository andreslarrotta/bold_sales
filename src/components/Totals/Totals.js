import React, { useState, useEffect } from 'react'

import './Totals.css'
import { useSales } from '../../context/sales-context'

export const Totals = () => {
    const { dataFilter, view, week, dateToday } = useSales()
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        if (dataFilter) {
            let amountFinal = 0
            dataFilter.forEach(element => {
                amountFinal += element.amount.total
                setAmount(amountFinal)
            });
        }
    }, [dataFilter])

    const handlePrice = (amount) => {
        const formatter = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        });
        return formatter.format(amount)
    }
    
    return (
        <div className='totals'>
            <div className='totals--title'>
                Total de ventas de
                {
                    view === 'Septiembre' && ' septiembre'
                }

                {
                    view === 'Week' && ' esta semana'
                }

                {
                    view === 'Today' && ' hoy'
                }

                <span className="material-symbols-outlined">
                    info
                </span>
            </div>
            <div className='totals--result'>
                <h2>{handlePrice(amount)}</h2>
                <p>
                    {
                        view === 'Septiembre' && ' Septiembre 2020'
                    }

                    {
                        view === 'Week' && `Semana ${week}`
                    }

                    {
                        view === 'Today' && `Hoy - ${dateToday}`
                    }
                </p>
            </div>
        </div>
    )
}