import React, { PureComponent } from 'react'

export default class TestMco extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, value: "here will be text area value, the code will be changed later" }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {

        if (this.props.ifShow != 8) {
            return (
                <div>
                 
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <button class="accordion" onClick={this.handleClick}><span class="number">&#9319;&nbsp;&nbsp;</span>Testing MCO Integration</button>
                    </div>
                    <div class="panel">
          <p>In the testing stage of development:
            <ol>
              <li>Use the testing Merchant Resource Center at <b>https://esqa.moneris.com/mpg</b> to configure your Moneris Checkout page for testing purposes.<br/><br/></li>
              <li>Use the testing URL for server to server requests:<br/>
                <b>https://gatewayt.moneris.com/chkt/request/request.php</b><br/><br/>
              </li>
              <li>Use the testing JavaScript library:<br/>
                <pre><code><span id="code6">&lt;script src="https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js"&gt;&lt;/script&gt;</span></code><span class="cl"></span></pre>
              </li>
              <li>Set up your monerisCheckout object to the testing mode:<br/>
                <pre><code><span id="code7">myCheckout.setMode("qa");</span></code><span class="cl"></span></pre>
              </li>
              <li>In all Preload requests use the value "qa" for the environment variable.<br/><br/></li>
              <li>In all Preload requests, make sure that you are using the testing version of your credentials for <b>Store ID</b>, <b>API token</b> and <b>Checkout ID</b>.<br/><br/></li>
              <li>In all Receipt requests use the value "qa" for the environment variable.<br/><br/></li>
              <li>In all Receipt requests, make sure that you are using the testing version of your credentials for <b>Store ID</b>, <b>API token</b> and <b>Checkout ID</b>.</li>
            </ol>
          </p>
        </div>
                </div>
            )
        }
    }
}
