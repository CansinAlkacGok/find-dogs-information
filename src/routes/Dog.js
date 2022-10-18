import React from 'react';
import { useParams } from "react-router-dom";
import { getDog } from "../dogsData";


export default function Dog () {
    const params = useParams();
    const {name, age, characteristics} = getDog(params.name);

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age} </p>
            <ul>
                {characteristics.map((fact,i) => <li key={i}>{fact}</li>)}
            </ul>
        </div>
    )
}