import React from 'react'
import "./style.css"

const SelectionbarOrder = () => {




    return (
        <div className="container">
            <div className="row">
                <div className="select_container col-lg-6 col-md-6">
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="select_container col-lg-6 col-md-6">
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

export default SelectionbarOrder;