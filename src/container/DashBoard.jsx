import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


import { Navbar } from '../components/Navbar';

const DashBoard = () => {
    return (
        <>
            <Navbar />
        </>
    )
}

export default DashBoard;
    // const [monsters, setMonsters] = useState([])
    // useEffect(
    //     () => {
    //         const fetchMonsters = async () => {
    //             try {
    //             const { data } = await axios.get('https://mhw-db.com/monsters')
    //             setMonsters(data)
    //             console.log(monsters)
    //             } catch (err) {
    //                 console.log(err)
    //             }
    //         }
    //         fetchMonsters()
    //     },[]
    // )

            {/* {monsters.map((monster) => (
                <div className='my-3' key={monster.id} >
                    <ul>
                    <h3>{monster.name}</h3>
                        <li>{monster.type}</li>
                        <li>{monster.locations[0].name}</li>
                        <li>{monster.description}</li>
                    </ul>
                </div>
            ))} */}