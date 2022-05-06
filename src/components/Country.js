import React from 'react';
import './Country.css';
import { useEffect, useState} from 'react';
const axios = require("axios");


export const Country = () => {

    const [ countries, setCountries] = useState([])
    const [ countries1, setCountries1] = useState({})
    const [ text, setText ] = useState("");
    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json').then(res => {
            setCountries(res.data)
        })
    }

    const serchCity = () => {
        // axios.get(`https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json${text}`).then(res => {
        //     setCountries(res.data)
        // })
        var arr = []
        for(var i = 0; i<countries.length; i++){
            if(countries[i].name == text) {
                arr.push(countries[i])
            }
        }
        // console.log("ajay")
           setCountries(arr)
               
        }


        
    
    
    // console.log(countries)
    // for(var i = 0; i<countries.length; i++) 
    // {
    //     console.log(countries[i])
    // }

    return (
        <div className='container' >
            <div className='heading'><span>where in the world?</span></div>
            <div className='input_container'>
                <div> <input type="text" className='search-input' onChange={e => setText(e.target.value)}/> <button className='search-button' onClick={serchCity}>Search</button></div>
               
            </div>
            <div className='countries_details'>
                {countries.map((el) => {
                    var classname = `country-list-${el.id}`;
                    return (
                
                <div className={classname}>
                    <div><img src={el.flag} alt =""  className="image" /></div>
                    <div>
                        <h4>{el.name}</h4>
                        <p>Population: <span>{el.population}</span></p>
                        <p>Region: <span>{el.region}</span></p>
                        <p>Capital: <span>{el.capital}</span></p>
                    </div>
                </div>
                )    
            })}


            </div>
        </div>

    )
}