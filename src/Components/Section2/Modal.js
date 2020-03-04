import React from "react"

const Modal=({table})=>
{
    return (
        <div className="colored-text1 slideanim col-lg-5" style={table.bg}>
            <p className="label1 sliderightanim">{table.title}</p>
            <h3 className="parag sliderightanim">{table.paragraphe}</h3>
            <div className="img1"> 
            <img className="img1 image1 sliderightanim" src={table.img} alt="/"/>
            </div>
        </div>         
    )

}
export default Modal;