import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PirateList from '../components/PirateList';

const Main = () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirate')
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    return (
        <div>
           {loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;