import React from 'react';
import "../css_comps/prods.css"
function ProdsItem(props) {
    let item = props.item;
    return (
        // border border-light mouseOver  p-2 overflow-hidden backg

        <div className="row p-2 border border-ligh mb-3 prod ">
            <img className="float-left mr-4 col-sm-3" src={item.image} alt="Card image cap" height="150"  width="150"/>
            <div className="col-md-3">
                <h3 >{item.name}</h3>
                <div>{item.description}</div>
            </div>


        </div>
    )
}

export default ProdsItem