import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import qs from 'qs';


// const Base_URL = 'http://localhost:4000'
const Base_URL = 'http://ec2-34-229-164-148.compute-1.amazonaws.com:4000'

const ProductContext = React.createContext()

function  ContextProvider(props) {

    const [testVal, setTestVal ] = useState('test')

    return (
        <ProductContext.Provider value={{
            testVal:testVal, 
            setTestVal:setTestVal
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}


// const ContextConsumer = ProductContext.Consumer;
const ContextConsumer =ProductContext  ;
export {ContextConsumer,ContextProvider}

