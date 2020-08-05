import React, { useRef, useState } from 'react';

import "../css_comps/prods.css"



function Nav(props) {
    const searchInput = useRef();
    const selectVaule = useRef();

    const searchBtn = () => {

        if (searchInput.current.value === "") {
            alert("Please a Country name Courtry in the search field")
        }
        else{

            props.setValue(searchInput.current.value);
            searchInput.current.value ="";
        } 

        
    }

    const sortBy =()=>{
        alert(selectVaule.current.value)

    }

    return (
        <nav className="container  text-white d-flex align-items-center justify-content-between backg">
            <div className="float-right">
                <div className="row">
                    <input ref={searchInput} type="text" placeholder="Search..." className="form-control col-sm-3 col-lg-8" />
                    <button onClick={searchBtn} className="btn btn-info  col-sm-3">Search</button>
                </div>
            </div>
          
                <select ref={selectVaule} onChange={sortBy} className="form-control w-25 col-sm-3" >
                    <option value="">Sort By...</option>
                    <option value="name">Name</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
           
        </nav>

    )
}

export default Nav
