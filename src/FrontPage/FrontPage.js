import React, { PureComponent } from 'react'
import Navigation from '../Navigation/Navigation'
import Config from './LeftMenu/Config'
import ClientSideCheckOut from './LeftMenu/ClientSideCheckout'
import PreloadRequest from './LeftMenu/PreLoadRequest'
import DisplayBrowser from './LeftMenu/DisplayBrowser'
import HandleCallback from './LeftMenu/HandleCallback'
import ReceiptRequest from './LeftMenu/ReceiptRequest'
import Terminating from './LeftMenu/Terminating'
import TestMac from './LeftMenu/TestMco'
import MovingProduction from './LeftMenu/MovingProduction'
import Checkoutpage from './RightMenu/CheckOut'
import Preload from './RightMenu/Preload'
import { ReactComponent as MonerisifLogo } from '../Images/MonerisifLogo.svg'
import { ReactComponent as MeriChatLogo } from '../Images/MeriChatLogo.svg'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Helmet from "react-helmet"

import "./FrontPage.css"


// store2
// yesguy
// chktD3MM4tore2


export default class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageDisplay: 0,
            StoreId: '',
            ApiToken: '',
            CheckOutId: ''
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClickPreload = this.handleClickPreload.bind(this);
        this.handleClickCheckout = this.handleClickCheckout.bind(this);
    }

    handleInput = (StoreId, ApiToken, CheckOutId) => {
        this.setState({ StoreId: StoreId });
        this.setState({ ApiToken: ApiToken });
        this.setState({ CheckOutId: CheckOutId });
    }


    handleClickPreload() {
        this.setState({
            pageDisplay: 2
        });

    }

    handleClickCheckout() {
        console.log(this.state.pageDisplay);
        this.setState({
            pageDisplay: 1
        });
        console.log(this.state.pageDisplay);
    }

    render() {
        const { current } = this.state;
        // console.log(this.state.StoreId);
        // console.log(this.state.ApiToken);
        // console.log(this.state.CheckOutId);
        return (
            <div>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="https://www.moneris.com/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="https://www.moneris.com/favicon.ico" type="image/x-icon" />
                    <title>Moneris | Integration Guides</title>
                    <script src="https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link href="https://chrome.google.com/webstore/detail/digfbfaphojjndkpccljibejjbppifbc" rel="chrome-webstore-item" />
                    <link href="style.css" rel="stylesheet" />
                </Helmet>
                <Navigation />
                <div style={{ width: "50vw", height: "100vh", float: "left", overflowY: "scroll" }}>
                    <div style={{ marginLeft: "20px", float: "left" }}><h3>Building your Moneris Checkout Integration</h3></div>
                    <Config onSelectionChange={this.handleInput} />
                    <ClientSideCheckOut></ClientSideCheckOut>
                    <PreloadRequest StoreId={this.state.StoreId} ApiToken={this.state.ApiToken} CheckOutId={this.state.CheckOutId} />
                    <DisplayBrowser />
                    <HandleCallback />
                    <ReceiptRequest />
                    <Terminating />
                    <TestMac />
                    <MovingProduction />
                </div>
                <div style={{ height: "100vh", width: "49vw", display: "inline-table", float: "left" }}>
                    <button id="tabRed" class="tablink" onClick={this.handleClickCheckout} id="tabDefaultOpen">Checkout Page</button>
                    <button id="tabGreen" class="tablink" onClick={this.handleClickPreload} >Preload Response</button>
                    <button id="tabBlue" class="tablink" onClick="openPage('receipt', this, '#6DC7BE')">Receipt Response</button>
                    <div>

                        <Checkoutpage ifShow={this.state.pageDisplay} />
                        <Preload ifShow={this.state.pageDisplay} />
                    </div>
                </div>
            </div>
        )
    }
}
