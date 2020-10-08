import React, { PureComponent } from 'react'


// PreloadResponse

export default class extends PureComponent {
    render() {
        if(this.props.ifShow == 2){
        return (
            <div>
                <div id="preload" class="tabcontent" style={{ height: "79vh", overflowY: "scroll" }}>
                    {/* <div id="loaderPreload" class="loader"></div> */}
                    <div id="preloadSection">
                        <div style={{ marginLeft: "20px" }}><h3>Actual JSON response for the current Preload Request</h3></div>
                        <textarea id="preloadRequestCode" value={JSON.stringify(this.props.PreloadResponse, null, 2)} rows="9" cols="50" spellcheck="false">
                            
                        </textarea>
                        <div style={{ marginLeft: "20px" }}>
                            <h3>References</h3>
                        </div>
                        <div class="tab">
                            <button class="tablinks" onclick="openReference(event, 'tablePreloadResponse')" id="preloadDefaultOpen">Response Fields</button>
                            <button class="tablinks" onclick="openReference(event, 'codePreloadResponse')">Full Sample Code</button>
                        </div>
                        <div id="tablePreloadResponse" class="tabsimplecontent" style={{ fontSIze: "12px" }}> </div>
                        <div id="codePreloadResponse" class="tabsimplecontent">
                            <pre><code><span class="line-number" id="codeLinesPreload"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span></span><span id="sampleResponsePreload">//Successful Preload

                                {
                                    //   "response":{
                                    //     "success":"true",
                                    //     "ticket":"1585G9G9GIKKGGGIGIOG09G9OGKGJFKFJFNjuit8g9"
                                    //   }
                                }

                                //Failed Preload
                                {
                                    //   "response":{
                                    //     "success":"false",
                                    //     "error":{
                                    //       "billing_details":{
                                    //         "data":"billing address must be set when AVS is enabled"
                                    //       }
                                    //     }
                                    //   }
                                }</span></code><span class="cl"></span></pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(<div></div>)
    }
}
}
