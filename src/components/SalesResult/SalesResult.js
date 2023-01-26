import React from 'react'

import './SalesResult.css'
import paymentIconMaster from '../../assets/mastercard_icon.png'
import paymentIconVisa from '../../assets/visa_icon.png'
import { useSales } from '../../context/sales-context'

export const SalesResult = () => {
    const { dataFilter, view, week } = useSales()

    console.log('data para la table', dataFilter)
    const handlePrice = (amount) => {
        const formatter = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        });
        return formatter.format(amount)
    }

    return (
        <div className='sales_result'>
            <div className='sales_result--title'>
                Tus ventas de
                {
                    view === 'Septiembre' && ' septiembre'
                }

                {
                    view === 'Week' && ` la semana ${week}`
                }

                {
                    view === 'Today' && ' hoy'
                }
            </div>
            <div className='sales_result--table'>
                <table cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr className='sales_result--table-titles'>
                            <td>Transacción</td>
                            <td>Fecha y hora</td>
                            <td>Método de pago</td>
                            <td>ID transacción Bold</td>
                            <td>Monto</td>
                        </tr>
                        {
                            dataFilter.map((sale, index) => {
                                return <tr className='sales_result--table-content' key={`${sale.id}-${index}`}>
                                    <td className='sales_result--table-content_transaccion'>
                                        <span className="material-symbols-outlined">
                                            {sale.icon}
                                        </span> {sale.transaction}
                                    </td>
                                    <td className='sales_result--table-content_date'>
                                        {sale.date}
                                    </td>
                                    <td className='sales_result--table-content_payment'>
                                        <img src={sale.paymentMethod.franchise === 'MasterCard' ? paymentIconMaster : sale.paymentMethod.franchise === 'Visa' ? paymentIconVisa : paymentIconMaster} alt='' />
                                        {sale.paymentMethod.number}
                                    </td>
                                    <td className='sales_result--table-content_id'>
                                        {sale.id}
                                    </td>
                                    <td className='sales_result--table-content_amount'>
                                        {
                                            sale.amount.total && <span className='sales_result--table-content_amount--total'>{handlePrice(sale.amount.total)}</span>
                                        }
                                        {
                                            sale.amount.title && <span className='sales_result--table-content_amount--text'>{sale.amount.title}</span>
                                        }
                                        {
                                            sale.amount.discounts !== 0 && <span className='sales_result--table-content_amount--discount'>-{handlePrice(sale.amount.discounts)}</span>
                                        }
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}