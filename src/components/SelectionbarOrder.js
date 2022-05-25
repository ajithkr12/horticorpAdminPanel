import React from 'react'
import "./style.css"

const SelectionbarOrder = () => {




    return (
        <div className="container">
            <div className="row">
                <div className="select_container col-lg-6 col-md-6">
                    <select name="districts" id="districts">
                        <option value="volvo">Alappuzha</option>
                        <option value="saab">Kottayam</option>
                        <option value="mercedes">Trivandrum</option>
                        <option value="audi">Kollam</option>
                    </select>
                </div>
                <div className="select_container col-lg-6 col-md-6">
                    <select name="blocks" id="blocks">
                        <option value="volvo">a</option>
                        <option value="saab">b</option>
                        <option value="mercedes">c</option>
                        <option value="audi">d</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

export default SelectionbarOrder;