import React, { PureComponent } from 'react'

export default class DisplayBrowser extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {

        if (this.props.ifShow != 4) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div>
                    <button class="accordion"  onClick={this.handleClick}><span class="number">&#9315;&nbsp;&nbsp;</span>Displaying in the Browser</button>
                    <div class="panel">
                        <p>When a customer goes to check out their items for purchase, the Moneris Checkout page is displayed in the &lt;div&gt; tag you created on your web site.<br></br><br></br>
                            To insert the Moneris Checkout instance into the &lt;div&gt;, you call the JavaScript function:<br></br>
                            <pre><code><span id="code5">myCheckout.startCheckout("<span id="ticketNumber">ticket #</span>");</span></code><span class="cl"></span></pre>
                            <button class="btn" onclick="displayCheckoutFunction(document.getElementById('ticketNumber').innerHTML)">Display Checkout</button>
                        </p>
                    </div>
                </div>
            )
        }
    }
}
