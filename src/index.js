import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";
import styleOne from "./styleOne.css";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component{

    state = {trimmedDataURL:null}
    sigPad = {}
    // function to clear signatures
    clear = ()=>{
        this.sigPad.clear()
    }

    trim =()=>{
        this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png')})
    }

    render(){
        let {trimmedDataURL} = this.state

        return(



            <div class="card text-center ">
                <div id="contract" class="card-header text-white bg-info">
                    <h3>COVID-19 CONTRACT</h3>
                    <h6>CONTRACT ATTESTATION</h6>
                </div>
                <div class="card-body">

                    <p class="card-text">
                    
                    By completing this letter, I attest that the answers provided in completing this screening tool and assessment were truthful and complete. I understand the contagious nature of COVID-19 and the risk associated with serious illness in the elderly. I have completed this screening and will inform the facility administrator or supervisor should I experience any symptoms during my shift or visit inside this facility.

                        As a legal record of completing the COVID-19 screening, I am attesting to the truthfulness and completeness of my answers prior to entry at Woodbridge on 10/11/20
                    </p>

                    <form>

                        <div className="row">

                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name"></input>
                            </div>

                            <div className="col">
                                <input type="text" class="form-control" placeholder="Last name"></input>
                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose ink color</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Green</option>
                                </select>
                            </div>


                        </div>



                    </form>

                    <p>Please Sign below in the grey space, as a legal record of completing COVID-19 screening. Thank you.</p>
                    
                </div>
                <div class="card-footer text-muted">
                    <div className={styleOne.container}>
                        <div className={styleOne.sigContainer}>
                        <SignaturePad canvasProps={{className: styleOne.sigPad}}
                            ref={(ref) => { this.sigPad = ref }} />

                        </div>

                        <div>
                            <button className={styleOne.buttonx} onClick={this.clear}>Clear your signature</button>
                            <button className={styleOne.buttonx} onClick={this.trim}>Trim your signature</button>
                        </div>

                        {trimmedDataURL 
                            ? <img className={styleOne.sigImage} src={trimmedDataURL} />
                        
                            : null
                        }
                    </div>
                    
                </div>
                <a href="#" class="btn btn-outline-info">Submit Signature</a>
            </div>







            
                
                


            
        )
    }







}

ReactDOM.render(<App/>, document.getElementById("root"))