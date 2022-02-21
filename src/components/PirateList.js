import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';
import axios from 'axios';
import '../styles/styles.css'
    
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
            <h1 className="header">Pirate Crew</h1>
            <Link to={`/new`} className="add-pirate"><p className="pirate-btn">Add Your Own Pirate</p></Link>
            {
                pirates.map((pirate, i) => {
                return (
                        <div key={i} className="pirate-card">
                            <div>
                                <img className="pirate-img" src={pirate.imgUrl} alt="pirate selfie"></img>
                            </div>
                            <h1 className="pirate-name">{pirate.name}</h1>
                            <Link to={`/pirate/${pirate._id}`}><button className="btn-text">View Pirate</button></Link>
                            <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)}/>
                        </div>
                        )
            })}
        </div>
    )
}
    
export default PirateList;