import React, { PureComponent } from 'react'

export default class MovingProduction extends PureComponent {
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

        if (this.props.ifShow != 9) {
            return (
                <div>
                    
                </div>
            )
        } else {
            return (
                <div>
                    <div class="panel">
                        <button class="accordion" onClick={this.handleClick}><span class="number">&#9320;&nbsp;&nbsp;</span>Moving to Production with MCO</button>
                        <p>Once you have finished testing your Moneris Checkout integration, do the following to move the integration into production:
              <ol>
                                <li>Ensure that you have duplicated your final testing configuration in your Moneris Checkout production configuration in the production Merchant Resource Center at <b>https://www3.moneris.com/mpg</b><br /><br /></li>
                                <li>Use the production URL for server to server requests:<br />
                                    <b>https://gateway.moneris.com/chkt/request/request.php</b><br /><br />
                                </li>
                                <li>Use the production JavaScript library:<br />
                                    <pre><code><span id="code6">&lt;script src="https://gateway.moneris.com/chkt/js/chkt_v1.00.js"&gt;&lt;/script&gt;</span></code><span class="cl"></span></pre>
                                </li>
                                <li>Set up your monerisCheckout object to the production mode:<br />
                                    <pre><code><span id="code7">myCheckout.setMode("prod");</span></code><span class="cl"></span></pre>
                                </li>
                                <li>In all Preload requests use the value "prod" for the environment variable.<br /><br /></li>
                                <li>In all Preload requests, make sure that you are using the production version of your credentials for <b>Store ID</b>, <b>API token</b> and <b>Checkout ID</b>.<br /><br /></li>
                                <li>In all Receipt requests use the value "prod" for the environment variable.<br /><br /></li>
                                <li>In all Receipt requests, make sure that you are using the production version of your credentials for <b>Store ID</b>, <b>API token</b> and <b>Checkout ID</b>.</li>
                            </ol>
                        </p>
                    </div>
                </div>
            )
        }
    }
}
