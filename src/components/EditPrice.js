import React from 'react'
import "./style.css"

const EditPrice = () => {




    return (
        <div className="container">
            <div className="row">
                        <div className="edit-content-container col-lg-12 col-md-12">
                            <div class="group col-lg-4 col-md-4 col-sm-4 col-xm-4">
                                <p>Tomato</p>
                            </div>
                            <div class="group col-lg-4 col-md-4 col-sm-4 col-xm-4">
                                <input type="checkbox" id="stock" name="stock" value="true"/><label for="stock">Out of the Stock</label>
                            </div>
                            <div class="group col-lg-4 col-md-4 col-sm-4 col-xm-4">      
                                <input type="text" placeholder="Price/Unit" required/>
                            </div>
                        </div>

            </div>


                    <div className="button-container col-lg-12 col-md-12">
                        <button type="button">Submit</button>
                    </div>

        </div>
    )
}

export default EditPrice;