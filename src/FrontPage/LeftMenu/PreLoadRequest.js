import React, { PureComponent } from 'react'
let temp = ""
let textValue = {
    "store_id": "store2",
    "api_token": "yesguy",
    "checkout_id": "chktD3MM4tore2",
    "txn_total": "2.00",
    "environment": "qa",
    "action": "preload"
};
function showObject(data) {
    var result = "";
    for (var p in data) {
        result += p + " , " + data[p] + "\n";
    }
    console.log(result);
}

function returnDataFormatted(data) {
    var x;
    var dataFormatted = '';
    var count = '';

    for (x of data) {
        if (x == '{') {
            count += '&emsp;&emsp;';
            dataFormatted += '{<br />' + count;
        } else if (x == ',') {
            dataFormatted += ',<br />' + count;
        } else if (x == '}') {
            count = count.substring(0, count.length - 12);
            dataFormatted += '<br />' + count + '}';
        } else {
            dataFormatted += x;
        }
    }

    return dataFormatted;
}
export default class PreLoadRequest extends PureComponent {
    constructor(props) {
        super(props);

        this.textValue = {
            "store_id": "TBD",
            "api_token": "TBD",
            "checkout_id": "TBD",
            "txn_total": "2.00",
            "environment": "qa",
            "action": "preload"
        };

        this.testValue = {
            "store_id": "store2",
            "api_token": "yesguy",
            "checkout_id": "chktD3MM4tore2",
            "txn_total": "2.00",
            "environment": "qa",
            "action": "preload"
        }


        this.state = { isToggleOn: true , response:''};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

        this.componentDidMount  = this.componentDidMount.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    testFunction() {
        fetch('https://gatewayt.moneris.com/chkt/request/request.php', {
            method: "POST",
            body: JSON.stringify(this.testValue),
            headers: {
                "Content-Type": "'application/x-www-form-urlencoded'"
            }
        })

            .then(res => {
                console.log(res)
                if (res.status === 400) {
                    return Promise.reject("Bad Request");
                } else if (res.status === 500) {
                    return Promise.reject("Server Internal Error");
                } else if (res.status === 404) {
                    return Promise.reject("Not found");
                } else {
                    return res.json();
                }
            })
            .catch(err => {
                alert(err);
            });
    };


     
    

    componentDidMount() {
        var request = new XMLHttpRequest()
        request.open('POST', 'https://gatewayt.moneris.com/chkt/request/request.php')
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.onreadystatechange =  () => {
            // Begin accessing JSON data here
            try {
                const data = JSON.parse(request.response)
                this.props.getResponse(data)
            } catch (err) {
                console.log(err)
                if (request.readyState == 4) {
                    // errorModal.style.display = "block";
                }
            }
        }
        request.send(JSON.stringify(this.testValue))
    }

    render() {
        this.textValue.store_id = this.props.StoreId;
        this.textValue.api_token = this.props.ApiToken;
        this.textValue.checkout_id = this.props.CheckOutId;
        console.log(this.textValue)
        console.log("motherfker")
        console.log(this.state)
        if (this.props.ifShow!= 3) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <button class="accordion" onClick={this.handleClick}><span class="number">&#9314;&nbsp;&nbsp;</span>PreLoadRequest</button>
                    </div>
                    <div class="panel">
                        <p>
                            The Preload request is the means by which a Moneris Checkout instance is securely generated at transaction time. It involves a server-to-server post using the JSON format.<br></br><br></br>
                            The response to the Preload request returns a ticket number which uniquely identifies the instance and must be passed in the JavaScript <b>monerisCheckout.startCheckout(ticket #)</b> request in order to display the Moneris Checkout page in the browser.<br></br><br></br>
                            In your server implementation, use the following Moneris Checkout URLs to post to, depending on the development stage:<br></br>
                            Testing: <b>https://gatewayt.moneris.com/chkt/request/request.php</b><br></br><br></br>
                            Production: <b>https://gateway.moneris.com/chkt/request/request.php</b><br></br><br></br>
                            <textarea id="preloadRequestCode" value={JSON.stringify(this.textValue, null, 2)} rows="9" cols="50" spellcheck="false">
                            </textarea>
                            <button class="btn" onclick={this.testFunction()}>Make Preload Request</button>
                            <br></br><br></br>
                            <div id="morePreload">
                                <h3>Request fields for Preload request &ndash; Required</h3>
                                <div id="tablePreloadRequest" style={{ fontSize: "12px" }}>#</div>
                                <br></br><br></br>
                            </div>
                            <button class="more" id="btnMoreLessPreload" onclick="readMoreLess('morePreload', 'btnMoreLessPreload')">Read more</button>
                        </p>
                    </div>
                </div>
            )
        }
    }
}
