import React, { PureComponent } from 'react'
import "./Navigation.css";
import { ReactComponent as MonerisLogo } from '../Images/MonerisLogo.svg'
export default class Navigation extends PureComponent {
    render() {
        return (
            <div className="navigator">
                                            <td style={{ width:'150px' }}>                                
                                <MonerisLogo />
                            </td>
                <a href="home.html" 
                    style={{fontWeight:"600", color: "white", fontWeight:"600",position: "relative",textDecoration: "none", top: "1.5em"}}>
                    Back home</a>
            </div>
            
        )
    }
}
