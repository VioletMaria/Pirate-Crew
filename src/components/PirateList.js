import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';
import axios from 'axios';
    
const PirateList = (props) => {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate')
            .then(res => setPirates(res.data))
            .catch(err => console.error(err));
    }, [pirates]);

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <Link to={`/new`}><p>Add Pirate</p></Link>
            {
                pirates.map((pirate, i) => {
                return (
                        <div key={i}>
                            <div>
                                <img style={{height:"100px"}} src={pirate.imgUrl} alt="pirate selfie"></img>
                            </div>
                            <h1>{pirate.name}</h1>
                            <Link to={`/pirate/${pirate._id}`}><button>View Pirate</button></Link>
                            <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)}/>
                        </div>
                        )
            })}
        </div>
    )
}
    
export default PirateList;