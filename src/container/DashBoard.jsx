import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const DashBoard = () => {
    const [monsters, setMonsters] = useState([])
    useEffect(
        () => {
            const fetchMonsters = async () => {
                try {
                const { data } = await axios.get('https://mhw-db.com/monsters')
                setMonsters(data)
                console.log(monsters)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchMonsters()
        },[]
    )
    return (
        <>
            <h1 className='text-stone-900 text-base'>Halaman Dashboard</h1>
            {monsters.map((monster) => (
                <div className='my-3' key={monster.id} >
                    <ul>
                    <h3>{monster.name}</h3>
                        <li>{monster.type}</li>
                        <li>{monster.locations[0].name}</li>
                        <li>{monster.description}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default DashBoard;