import React from 'react';
import {NavLink} from 'react-router-dom';
import { getDogsArray } from './dogsData';

export default function NavBar(){
    
    const dogs = getDogsArray();
    
    return(
        <nav style ={{padding: '1rem', display:'flex', flexFlow: 'wrap', justifyContent: 'space-around'}}>

            {dogs.map(dog => (
                <NavLink
                    style ={{margin: '1rem', textAlign: 'center',}} 
                    to ={`/dogs/${dog.name}`}
                    key ={dog.name}
                >
                    <img src= {dog.image} alt='' />
                    <p>{dog.name}</p>
                </NavLink>
            ))}

        </nav>
      
    )
}