import React, { useState, useEffect } from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import ProdsItem from './prodsItem';
function Main(props) {
    let [prods_ar, setProdsArr] = useState([]);
    let [temp_ar, setTempArr] = useState([]);

    
    useEffect(() => {
        let url ="http://localhost:3000/products"
        doApiGet(url)
            .then(data => {
                console.log(data);
                setProdsArr(data)
                setTempArr(data)
            })

    }, [])


    useEffect(()=>{

       prods_ar=temp_ar;
       let arr=[];
        prods_ar.map(item=>{
            if(item.name.toLowerCase().includes(props.value) || item.description.toLowerCase().includes(props.value)){
                arr.push(item)
            }
            else{
                setProdsArr([])
            }
        })
        setProdsArr(arr)

    },[props.value])

    return (
        <div className="container mt-4">
            {(prods_ar.length>0)? prods_ar.map(item => {
                return (<ProdsItem key={item.id} item={item} />)
            }):"Result Not found" }
        </div>
    )
}
export default Main