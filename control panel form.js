import React, { useState } from "react";
import './control panel.css'

function FormAddCommponent(props) {

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [img, setImg] = useState('')

    let formHandler = e => {
        e.preventDefault();
        props.add1(text1);
        props.add2(text2);
        props.add3(text3);
        props.add4(img);
        setText1('')
        setText2('')
        setText3('')
        setImg('')
    }

    let inputTitle = e => setText1(e.target.value)
    let inputBody = e => setText2(e.target.value)
    let inputPrice = e => setText3(e.target.value)
    let inputImg = e => setImg(e.target.value)

    return (
        <div className="details-p">
            <form onSubmit={formHandler}>
                <div>
                    <input className="imd-details" type="file" onChange={inputImg} value={img} />
                </div>
                <div className="style">
                    <label>
                        title:
                        <input name="title" placeholder="title" type="text" onChange={inputTitle} value={text1}></input>
                    </label>
                    <label>
                        <p className="body-lable" >
                            body:
                        </p>
                        <textarea name="body" placeholder="body" rows="none" cols="30" className="body" onChange={inputBody} value={text2}></textarea>
                    </label>
                    <label>
                        price:
                        <input name="price" placeholder="price" type="text" onChange={inputPrice} value={text3}></input >
                    </label>
                    <button type="submit" className="btn-done">done</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddCommponent;