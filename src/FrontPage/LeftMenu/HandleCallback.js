import React, { PureComponent } from 'react'

export default class HandleCallback extends PureComponent {
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

        if (this.props.ifShow != 5) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div>
                    <button class="accordion" onClick={this.handleClick}><span class="number">&#9316;&nbsp;&nbsp;</span>Handling Callbacks</button>
                    <div class="panel">
                        <p>Callbacks are the means by which Moneris Checkout communicates with your merchant checkout page. All callbacks include a single parameter defined as a JSON-formatted string.<br></br><br></br>
                            In order to handle callbacks, you need to create JavaScript functions that receive the callbacks being sent by Moneris Checkout when the events occur. These functions are linked to the callbacks you set earlier when you prepared your site's checkout page, as described in the Client-Side Checkout Page section.
            <div id="moreCallbacks" style={{fontSize:"12px"}}>
                                <table class="zebraTable">
                                    <tr>
                                        <th>Variable Name</th>
                                        <th>Type and limits</th>
                                        <th>Description</th>
                                    </tr>
                                    <tr>
                                        <td>handler<br></br><code class="simpleCode">handler</code></td>
                                        <td>String<br></br>Alphanumeric</td>
                                        <td>Describes the type of callback being used. Possible values:<br></br>cancel_transaction<br></br>error_event<br></br>page_loaded<br></br>payment_complete<br></br>payment_receipt</td>
                                    </tr>
                                    <tr>
                                        <td>ticket number<br></br><code class="simpleCode">ticket</code></td>
                                        <td>String<br></br>maximum 50-character alphanumeric</td>
                                        <td>The unique ticket number that identifies a particular transaction; this returned in the response to the Preload request</td>
                                    </tr>
                                    <tr>
                                        <td>response code<br></br><code class="simpleCode">response_code</code></td>
                                        <td>String<br></br>Alphanumeric</td>
                                        <td>Identifies the result of the callback. Possible response codes:<br></br>001: Success<br></br>902: 3-D Secure failed on response<br></br>2001: Invalid ticket/ticket re-use</td>
                                    </tr>
                                </table>
                            </div>
                            <br></br>
                            <button class="more" id="btnMoreLessCallbacks" onclick="readMoreLess('moreCallbacks', 'btnMoreLessCallbacks')">Read more</button>
                        </p>
                    </div>
                </div>
            )
        }
    }
}
