import React, { PureComponent } from 'react'

export default class ClientSideCheckout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {

        if (this.props.ifShow != 2) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <button class="accordion" onClick={this.handleClick}><span class="number">&#9313;&nbsp;&nbsp;</span>Client-Side Checkout Page</button>
                    </div>
                    <div class="panel">
                        <p>In order to prepare your client-side checkout page for interacting with Moneris Checkout, you need to do a few tasks first:
              <ol>
                                <li>Add a call to the Moneris Checkout JavaScript library in a &lt;script&gt; tag:<br></br>
                  Test<br></br>
                                    <pre><code><span id="code1">&lt;script src="https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js"&gt;</span></code><span class="cl"></span></pre>
                  Production<br></br>
                                    <pre><code><span id="code2">&lt;script src="https://gateway.moneris.com/chkt/js/chkt_v1.00.js"&gt;</span></code><span class="cl"></span></pre>
                                </li>
                                <li>Create a &lt;div&gt; in the HTML:<br></br><br></br>
                                    <pre><code><span id="code3">&lt;div id="monerisCheckout"&gt;&lt;/div&gt;</span></code><span class="cl"></span></pre>
                  (Optional): If you are not using the "Full screen" window sizing option, you will need to define the size of your window by creating another &lt;div&gt; around this one, for example:<br></br>
                                    <pre><code><span id="code3">&lt;div id="outerDiv" style="width:400px"; height"300px"&gt;
                                    &emsp;&lt;div id="monerisCheckout"&gt;&lt;/div&gt;
  &lt;/div&gt;</span></code><span class="cl"></span></pre>
                                </li>
                                <li>Instantiate the monerisCheckout object and set it up:<br></br><br></br>
                                    <pre><code><span id="code4">var myCheckout = new monerisCheckout();
                                    myCheckout.setMode("qa");
  myCheckout.setCheckoutDiv("monerisCheckout");</span></code><span class="cl"></span></pre>
                                </li>
                                <li>Set callbacks in JavaScript:<br></br><br></br>
                                    <pre><code><span id="code5">var myCheckout = new monerisCheckout();
                                    myCheckout.setCallback("page_loaded", myPageLoad);
                                    myCheckout.setCallback("cancel_transaction", myCancelTransaction);
                                    myCheckout.setCallback("error_event", myErrorEvent);
                                    myCheckout.setCallback("payment_receipt", myPaymentReceipt);
  myCheckout.setCallback("payment_complete", myPaymentComplete);</span></code><span class="cl"></span></pre>
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
            )
        }
    }
}
