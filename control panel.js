import React, { Component } from "react";
import './control panel.css'
import FormAddCommponent from "./control panel form";
import Card_con from './card control'
import Nav_con from './nav control'
import Details_con from './details panel'


class Panel extends Component {
    state = {
        input: [],
        statusDone: false
    }

    add1(text) {
        this.setState(prevState => {
            return {
                input: [
                    ...prevState.input,
                    { key: Date.now(), done: false, text }
                ],
            }
        })
    }
    add2(text) {
        this.setState(prevState => {
            return {
                input: [
                    ...prevState.input,
                    { key: Date.now(), done: false, body: text }
                ],
            }
        })
    }
    add3(namber) {
        this.setState(prevState => {
            return {
                input: [
                    ...prevState.input,
                    { key: Date.now(), done: false, price: namber }
                ],
            }
        })
    }
    add4(file) {
        this.setState(prevState => {
            return {
                input: [
                    ...prevState.input,
                    { key: Date.now(), done: false, img: file }
                ],
            }
        })
    }
    render() {

        let { input, statusDone } = this.state;

        let filterinput = input.filter(item => item.done === statusDone)
        console.log(filterinput)

        return (
            <div>
                <>
                    <nav>
                        <ul>
                            <a href="#" className={statusDone ? 'active' : ''} onClick={this.setState({ statusDone: true })}>کامپوننت ها</a>
                            <a href="#" className={!statusDone ? 'active' : ''} onClick={this.setState({ statusDone: false })}>تایید</a>
                            {/* <li><a href="#">ایجاد</a></li> */}
                        </ul>
                    </nav>
                </>
                {/*   <>
                    <Details_con />
                </> */}
                <>
                    <FormAddCommponent add1={this.add1.bind(this)} add2={this.add2.bind(this)} add3={this.add3.bind(this)} add4={this.add4.bind(this)} />
                </>


                {
                    filterinput.length === 0
                        ? <p> پستی یافت نشد!! </p>
                        : filterinput.map(item => <Details_con key={item.key} body={item.body} price={item.price} text={item.text} img={item.img} />)
                }

            </div>
        )
    }
}

export default Panel;


