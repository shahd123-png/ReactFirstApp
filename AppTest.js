import React, { useState, useRef } from "react";
import './AppTest.css'
import Card from "./Card";
import Filter from './Filter'

const AppTest = () => {
    const [filter, setFilter] = useState(""); // get the filter value

    //const inputRef = useRef[null]; //اول ما تكون بتكون فاضيه 
    const [state, setState] = useState([
        {
            name: "fadi",
            age: 32,
            career: "Front End Team Lead"
        },

        {
            name: "shahd",
            age: 23,
            career: "Front End Traniee"

        },
        {
            name: "jana",
            age: 23,
            career: "Front End Traniee"
        },
        {
            name: "ali",
            age: 30,
            career: "Front End Traniee"
        }
    ]);


    const deleteHandler = (e, clickidx) => {
        const del = state.filter((e, idx) => idx !== clickidx)
        setState(del);
    }

    const filterNames = (name) => {  // updates the filter state variable with the value provided.
        setFilter(name);
    }

    const nameHandler = () => { //filters the developers based on the filter value. If there is a filter value, it returns developers whose names include the filter string; otherwise, it returns the entire list of developers.
        if(filter.length !== 0 ){
            return state.filter((el) => el.name.includes(filter));
        }
        return state;

    }


    // const changeInput = () => {
    //   inputRef.current.focus();
    //}

    
    return (
        <div >

            <h1 className="text"> Front End</h1>

            <Filter filteration={filterNames} />

            <Card nameList={nameHandler()} color="pink" deleteFunc={deleteHandler} />
        </div>);


}

export default AppTest;