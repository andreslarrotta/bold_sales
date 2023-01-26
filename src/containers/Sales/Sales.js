import React from 'react'

import './Sales.css'
import { Totals } from '../../components/Totals'
import { Filters } from '../../components/Filters'
import { SalesResult } from '../../components/SalesResult/SalesResult'

export const Sales = () => {

    return (
        <div className='sales'>
            <div className='sales_container'>
                <div className='sales_top'>
                    <div className='sales_top--total'>
                        <Totals />
                    </div>
                    <div className='sales_top--filters'>
                        <Filters />
                    </div>
                </div>
                <div className='sales_content'>
                    <SalesResult />
                </div>
            </div>
        </div>
    )
}