import React, { useState, useEffect } from 'react'

import './SalesResult.css'
import paymentIconMaster from '../../assets/mastercard_icon.png'
import paymentIconVisa from '../../assets/visa_icon.png'
import { useSales } from '../../context/sales-context'

export const SalesResult = () => {
    const { dataFilter, view, week, filterTable } = useSales()
    const [data, setData] = useState(dataFilter)

    const handlePrice = (amount) => {
        const formatter = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        });
        return formatter.format(amount)
    }

    useEffect(() => {
        const dataOriginal = dataFilter
        let dataEmply = []

        for (const element of filterTable) {

            if (element === "link") {
                const dataLink = dataFilter.filter((sale) => sale?.type === "link");
                dataEmply = dataEmply.concat(dataLink)
            }

            if (element === "datafono") {
                const dataLDatafono = dataFilter.filter((sale) => sale?.type === "datafono");
                dataEmply = dataEmply.concat(dataLDatafono)
            }
            setData(dataEmply)

            if (element === "all") {
                setData(dataOriginal)
            }
        }

        if (filterTable === "" || filterTable === "all") {
            setData(dataOriginal)
        }

        if (filterTable === "datafono") {
            const newData = dataFilter.filter((sale) => sale?.type === "datafono");
            setData(newData)
        }

        if (filterTable === "link") {
            const newData = dataFilter.filter((sale) => sale?.type === "link");
            setData(newData)
        }

    }, [dataFilter, filterTable]);

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
                            <td>Transacci??n</td>
                            <td>Fecha y hora</td>
                            <td>M??todo de pago</td>
                            <td>ID transacci??n Bold</td>
                            <td>Monto</td>
                        </tr>
                        {
                            data.map((sale, index) => {
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