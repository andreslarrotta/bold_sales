import React from 'react'

import './SalesResult.css'
import paymentIcon from '../../assets/mastercard_icon.png'

export const SalesResult = () => {

    return (
        <div className='sales_result'>
            <div className='sales_result--title'>
                Tus ventas de septiembre
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
                        <tr className='sales_result--table-content'>
                            <td className='sales_result--table-content_transaccion'>
                                <span className="material-symbols-outlined">
                                    phone_iphone
                                </span> Cobro exitoso
                            </td>
                            <td className='sales_result--table-content_date'>
                                04/06/2020 - 17:14:24
                            </td>
                            <td className='sales_result--table-content_payment'>
                                <img src={paymentIcon} alt='' />
                                *** *** *** 7711
                            </td>
                            <td className='sales_result--table-content_id'>
                                GZEN23784UBV2
                            </td>
                            <td className='sales_result--table-content_amount'>
                                <span className='sales_result--table-content_amount--total'>$25.000</span>
                                <span className='sales_result--table-content_amount--text'>Deducción Bold</span>
                                <span className='sales_result--table-content_amount--discount'>-$1.5000</span>
                            </td>
                        </tr>
                        <tr className='sales_result--table-content'>
                            <td className='sales_result--table-content_transaccion'>
                                <span className="material-symbols-outlined">
                                    phone_iphone
                                </span> Cobro no realizado
                            </td>
                            <td className='sales_result--table-content_date'>
                                04/06/2020 - 17:14:24
                            </td>
                            <td className='sales_result--table-content_payment'>
                                <img src={paymentIcon} alt='' />
                                *** *** *** 7711
                            </td>
                            <td className='sales_result--table-content_id'>
                                GZEN23784UBV2
                            </td>
                            <td className='sales_result--table-content_amount'>
                                <span className='sales_result--table-content_amount--total'>$15.000</span>
                            </td>
                        </tr>
                        <tr className='sales_result--table-content'>
                            <td className='sales_result--table-content_transaccion'>
                                <span className="material-symbols-outlined">
                                    attach_file
                                </span> Cobro exitoso
                            </td>
                            <td className='sales_result--table-content_date'>
                                04/06/2020 - 17:14:24
                            </td>
                            <td className='sales_result--table-content_payment'>
                                <img src={paymentIcon} alt='' />
                                *** *** *** 7711
                            </td>
                            <td className='sales_result--table-content_id'>
                                GZEN23784UBV2
                            </td>
                            <td className='sales_result--table-content_amount'>
                                <span className='sales_result--table-content_amount--total'>$25.000</span>
                                <span className='sales_result--table-content_amount--text'>Deducción Bold</span>
                                <span className='sales_result--table-content_amount--discount'>-$1.5000</span>
                            </td>
                        </tr>
                        <tr className='sales_result--table-content'>
                            <td className='sales_result--table-content_transaccion'>
                                <span className="material-symbols-outlined">
                                    phone_iphone
                                </span> Cobro exitoso
                            </td>
                            <td className='sales_result--table-content_date'>
                                04/06/2020 - 17:14:24
                            </td>
                            <td className='sales_result--table-content_payment'>
                                <img src={paymentIcon} alt='' />
                                *** *** *** 7711
                            </td>
                            <td className='sales_result--table-content_id'>
                                GZEN23784UBV2
                            </td>
                            <td className='sales_result--table-content_amount'>
                                <span className='sales_result--table-content_amount--total'>$25.000</span>
                                <span className='sales_result--table-content_amount--text'>Deducción Bold</span>
                                <span className='sales_result--table-content_amount--discount'>-$1.5000</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}