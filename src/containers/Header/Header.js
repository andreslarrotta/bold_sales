import React from 'react'

import './Header.css'
import Logo from '../../assets/bold_logo.png'

export const Header = () => {

    return (
        <header>
            <div className='header'>
                <div className='header_container'>
                    <div className='header--logo'>
                        <img src={Logo} alt='Logo bold' />
                    </div>
                    <div className='header--nav'>
                        <nav>
                            <ul>
                                <li>
                                    <a href='/'>Mi negocio</a>
                                </li>
                                <li>
                                    <a href='/'>Ayuda</a>
                                    <span class="material-symbols-outlined">
                                        help
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}