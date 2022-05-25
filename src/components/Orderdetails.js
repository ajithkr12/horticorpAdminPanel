import React from 'react'
import "./style.css"

const Orderdetails = () => {




    return (
        <div className="container">
            <div className="row">
                <div className="order-container col-lg-6 col-md-6">
                    <h5>Ajith | 9497086676</h5>
                    <div className="address-container col-lg-12 col-md-12">
                        <p>Kaippayil House</p>
                        <p>Edayarickapuzha</p>
                        <p>Kangazha</p>
                        <p>Kottayam</p>
                        <p>656541</p>

                    </div>
                    <div className="item-container col-lg-12 col-md-12">
                    <div className="item-box col-lg-12 col-md-12">
                        <div className="content-container col-lg-12 col-md-12">
                            <p>Payar</p>
                            <p>250 gms</p>
                            <p>4</p>
                            <p>100/-</p>
                        </div>
                        <div className="content-container col-lg-12 col-md-12">
                            <p>Tomato</p>
                            <p>250gms</p>
                            <p>2</p>
                            <p>30/-</p>
                        </div>
                        </div>
                        
                    </div>
                    <h4>Total Price: 130/-</h4>
                    <div className="content-container col-lg-12 col-md-12">
                    <button type="button">Click Me</button>
                    <button type="button">Click Me!</button>
                    <button type="button">Click Me!</button>
            
                        </div>
                </div>
                

            </div>

        </div>
    )
}

export default Orderdetails;