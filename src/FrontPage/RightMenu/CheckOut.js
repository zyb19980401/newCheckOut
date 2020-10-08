import React, { PureComponent } from 'react'
import { ReactComponent as MonerisifLogo } from '../../Images/MonerisifLogo.svg'
import "../FrontPage.css"
export default class Checkout extends PureComponent {
    render() {
        if (this.props.ifShow == 1) {
            return (
                <div>
                    <table style={{ height: "20vh", widht: "100%", backgroundColor: "white", borderSpacing: "0px" }}>
                        <tbody>
                            <tr id="grad4" style={{ textAlign: "center" }}>
                                <td style={{ width: "25%" }}>
                                    <MonerisifLogo />
                                </td>
                                <td>
                                    <h2>The Merchant's Checkout Page</h2>
                                </td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td style={{ padding: "3px" }}>
                                                    <span class="material-icons">shopping_cart</span>
                                                </td>
                                                <td style={{ padding: "3px" }}>
                                                    <h4>PAYMENT</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="outerDiv" style={{ height: "63vh", textAlign: "-webkit-center", backgroundColor: "#F5F5F5" }}>
                        <div id="monerisCheckout" style={{ border: "3px dotted", height: "100%" }}><br /><br /><br /><br /><h1>I want to insert here my<br />Moneris Checkout instance</h1></div>
                    </div>
                    <a id="myBtn" href="#"><i class="material-icons">phone_callback</i>
                        <span id="badgeCounter" class="badge" style={{ display: "none" }}>3</span>
                    </a>

                    <div id="myCallbackModal" class="modal">

                        <div class="modal-content">
                            <div class="modal-header">
                                <span class="close">&times;</span>
                                <h3>Callbacks console</h3>
                            </div>
                            <div class="modal-body" id="modalBody">
                                <p>No callbacks yet!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
            <div></div> 
            )
        }
    }
}
