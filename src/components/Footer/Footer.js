import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
// import { headerData } from '../../data/headerData'

function Footer() {

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Copyright &copy; {new Date().getFullYear()} Noel Sipayung. All rights reserved.
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                </span>
                
            </p>
        </div>
    )
}

export default Footer

