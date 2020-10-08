import React, { PureComponent } from 'react'

export default class ReceiptRequest extends PureComponent {
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

        if (this.props.ifShow != 6) {
            return (
                <div>
                   
                </div>
            )
        } else {
            return (
                <div>
                    <button class="accordion"  onClick={this.handleClick}><span class="number">&#9317;&nbsp;&nbsp;</span>ReceiptRequest</button>
                    <div class="panel">
          <p>Once the Payment Complete callback has been called, your merchant website can make the server-to-server Receipt Request call in order to obtain the details of the transaction for the receipt and to determine whether the transaction was approved or declined.<br/><br/>
            In your server implementation, use the following Moneris Checkout URLs to post to, depending on the development stage:<br/><br/>
            Testing:&nbsp;<b>https://gatewayt.moneris.com/chkt/request/request.php</b><br/><br/>
            Production:&nbsp;<b>https://gateway.moneris.com/chkt/request/request.php</b><br/><br/>
{/* 
            <pre><code>
                <span class="line-number" id="codeLinesReceiptRequest"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span></span><span id="receiptRequest">{
                    "store_id":"<span id="storeIdReceipt">storeId</span>",
                    "api_token":"<span id="apiTokenReceipt">apiToken</span>",
                    "checkout_id":"<span id="checkoutIdReceipt">checkoutId</span>",
                    "ticket":"<span id="ticketNumber1">ticket #</span>",
                    "environment":"qa",
                    "action":"receipt"
}</span></code><span class="cl"></span></pre> */}

            <button class="btn" onclick="receiptRequestFunction(document.getElementById('storeIdReceipt').innerHTML, document.getElementById('apiTokenReceipt').innerHTML, document.getElementById('checkoutIdReceipt').innerHTML, document.getElementById('ticketNumber').innerHTML)">Make Receipt Request</button><br/><br/><br/>
            <div id="moreReceipt" style={{ fontSize: "12px" }}>
              <table class="zebraTable">
                <tr>
                  <th>Variable Name</th>
                  <th>Type and limits</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>store ID<br/><code class="simpleCode">store_id</code></td>
                  <td>String<br/>N/A</td>
                  <td>Unique identifier provided by Moneris upon merchant account set up</td>
                </tr>
                <tr>
                  <td>API token<br/><code class="simpleCode">api_token</code></td>
                  <td>String<br/>N/A</td>
                  <td>Unique alphanumeric string assigned upon merchant account activation</td>
                </tr>
                <tr>
                  <td>checkout ID<br/><code class="simpleCode">checkout_id</code></td>
                  <td>String<br/>30-character alphanumeric (maximum)</td>
                  <td>Identifies your Moneris Checkout configuration; this is given to you when you configure your page in the Merchant Resource Center</td>
                </tr>
                <tr>
                  <td>ticket number<br/><code class="simpleCode">ticket</code></td>
                  <td>String<br/>maximum 50-character alphanumeric</td>
                  <td>The unique ticket number that identifies a particular transaction; this returned in the response to the Preload request</td>
                </tr>
                <tr>
                  <td>developmental mode<br/><code class="simpleCode">environment</code></td>
                  <td>String<br/>alphabetic</td>
                  <td>Indicates the stage of development you are sending the request for:<br/><br/>testing = qa<br/>production = prod</td>
                </tr>
                <tr>
                  <td>request type<br/><code class="simpleCode">action</code></td>
                  <td>String<br/>alphabetic</td>
                  <td>Type of request being made to Moneris Checkout server. Allowable values:<br/><br/>preload or receipt</td>
                </tr>
              </table>
            </div>
            <button class="more" id="btnMoreLessReceipt" onclick="readMoreLess('moreReceipt', 'btnMoreLessReceipt')">Read more</button>
          </p>
        </div>
                </div>
            )
        }
    }
}
