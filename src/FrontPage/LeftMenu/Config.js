import React, { PureComponent } from 'react'



export default class config extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, StoreId: "TBD", ApiToken: "TBD", CheckOutId: "TBD" };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleSaveChange() {
    this.props.onSelectionChange(this.state.StoreId, this.state.ApiToken, this.state.CheckOutId);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }





  render() {

    if (this.props.ifShow == 1) {

      return (
        <div>
          <div>
            <button class="accordion" onClick={this.handleClick}><span class="number">&#9312;&nbsp;&nbsp;</span>Configuration</button>
          </div>
          <div class="panel">
            <p>The first step is to configure your Moneris  Checkout page in the Moneris Merchant Resource Center (MRC).<br></br>
            In the initial stage of development, you create a test configuration in the testing MRC. Once the solution is ready to be deployed to production, you must create a new, separate configuration for the production environment in the production MRC.<br></br>
            The checkout ID is the key value that is generated after the configuration is completed and used within the Preload Request in order to identify the specific Moneris Checkout configuration.<br></br><br></br>
              <ol>
                <li>Log into the Merchant Resource Center at one of the following URLs (according to your stage of development)<br></br><br></br>
                Testing: <a href="https://esqa.moneris.com/mpg" target="_blank">https://esqa.moneris.com/mpg</a><br></br><br></br>
                Production: <a href="https://www3.moneris.com/mpg" target="_blank">https://www3.moneris.com/mpg</a><br></br><br></br>
                </li>
                <li>In the Admin menu, select Moneris Checkout Config</li>
                <li>Click the Create Profile button</li>
                <li>Follow the on-screen steps to complete the configuration</li>
              </ol>
              <form>
                <table>
                  <tr>
                    <td>
                      <label for="fname">Store ID:</label>
                    </td>
                    <td>
                      <form>
                        <label>
                          StoreId:
                            <input
                            name="StoreId"
                            type="text"
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lname">API Token:</label>
                    </td>
                    <td>
                      <form>
                        <label>
                          API Token:
                            <input
                            name="ApiToken"
                            type="text"
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lname">Checkout ID:</label>
                    </td>
                    <td>
                      <form>
                        <label>
                          CheckOutId:
                            <input
                            name="CheckOutId"
                            type="text"
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                      </form>
                    </td>
                  </tr>
                </table>
              </form>
              <button class="btn" onclick="document.getElementById('myFile').click()">Upload configuration</button>
              <button class="btn" style={{ marginLeft: "10vw" }} onclick={this.handleSaveChange()}>Submit Changes</button>
              <form id="myForm">
                <input type="file" id="myFile" accept=".xml" style={{ display: "none" }}></input>
              </form>
              <div id="snackbar">Changes have been applied</div>
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}
