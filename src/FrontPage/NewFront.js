import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css'
import 'antd/lib/style/themes/default.less';
import 'antd/dist/antd.less'; // Import Ant Design styles by less entry
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
const { Step } = Steps;

export default class NewFront extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageDisplay: 0,
            StoreId: '',
            ApiToken: '',
            CheckOutId: '',
            currentNum: 1,
            Response:''
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClickPreload = this.handleClickPreload.bind(this);
        this.handleClickCheckout = this.handleClickCheckout.bind(this);
    }


    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };


    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    handleInput = (StoreId, ApiToken, CheckOutId) => {
        this.setState({ StoreId: StoreId });
        this.setState({ ApiToken: ApiToken });
        this.setState({ CheckOutId: CheckOutId });
    }


    handleRespones = (Response) => {
        this.setState({Response:Response})
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
        console.log(this.state.current);
        console.log(this.state)
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
                <Steps
                    size="small"
                    type="navigation"
                    current={current}
                    onChange={this.onChange}
                    className="site-navigation-steps"
                >
                    <Step status="process" title="Configuration" onClick={()=>this.setState({currentNum:1})} />
                    <Step status="process" title="ClientSideCheckOut" onClick={()=>this.setState({currentNum:2})}/>
                    <Step status="process" title="PreloadRequest" onClick={()=>this.setState({currentNum:3})}/>
                    <Step status="process" title="DisplayBrowser" onClick={()=>this.setState({currentNum:4})}/>
                    <Step status="process" title="HandleCallback" onClick={()=>this.setState({currentNum:5})}/>
                    <Step status="process" title="ReceiptRequest" onClick={()=>this.setState({currentNum:6})}/>
                    <Step status="process" title="Terminating" onClick={()=>this.setState({currentNum:7})}/>
                    <Step status="process" title="TestMac" onClick={()=>this.setState({currentNum:8})}/>
                    <Step status="process" title="MovingProduction" onClick={()=>this.setState({currentNum:9})}/>
                </Steps>
                <div style={{ width: "50vw", height: "100vh", float: "left", overflowY: "scroll" }}>
                    <div style={{ marginLeft: "20px", float: "left" }}><h3>Building your Moneris Checkout Integration</h3></div>
                    <Config onSelectionChange={this.handleInput} ifShow={this.state.currentNum}/>
                    <ClientSideCheckOut ifShow={this.state.currentNum}></ClientSideCheckOut>
                    <PreloadRequest getResponse={this.handleRespones} ifShow={this.state.currentNum} StoreId={this.state.StoreId} ApiToken={this.state.ApiToken} CheckOutId={this.state.CheckOutId} />
                    <DisplayBrowser ifShow={this.state.currentNum}/>
                    <HandleCallback ifShow={this.state.currentNum}/>
                    <ReceiptRequest ifShow={this.state.currentNum}/>
                    <Terminating ifShow={this.state.currentNum}/>
                    <TestMac ifShow={this.state.currentNum}/>
                    <MovingProduction ifShow={this.state.currentNum}/>
                </div>
                <div style={{ height: "100vh", width: "49vw", display: "inline-table", float: "left" }}>
                    <button id="tabRed" class="tablink" onClick={this.handleClickCheckout} id="tabDefaultOpen">Checkout Page</button>
                    <button id="tabGreen" class="tablink" onClick={this.handleClickPreload} >Preload Response</button>
                    <button id="tabBlue" class="tablink" onClick="openPage('receipt', this, '#6DC7BE')">Receipt Response</button>
                    <div>
                        <Checkoutpage ifShow={this.state.pageDisplay} />
                        <Preload ifShow={this.state.pageDisplay} PreloadResponse={this.state.Response} />
                    </div>
                </div>
            </div>
        )
    }
}
