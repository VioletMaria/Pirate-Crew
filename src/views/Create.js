import React, { useState } from 'react'
import axios from 'axios';
import { Link, useHistory  } from "react-router-dom";
import PirateForm from '../components/PirateForm';

const Create = (props) => {
    const [error, setError] = useState([]);
    const history = useHistory();

    const createPirate = pirate => {
        axios.post(`http://localhost:8000/api/pirate/new`, pirate)
        .then(res => {
            setError([])
            history.push('/')
        })

        .catch(err => {
                console.log(err.response.data.error.errors)
                setError(err.response.data.error.errors)
        })
    }

    return (
        <div>
            <h1>Create A Pirate</h1>
            <Link to={"/"}><button>Crew Board</button></Link>
                <div>
                    <PirateForm
                        onSubmitProp={createPirate}
                        initialName=""
                        initialQuote=""
                        initialImgUrl=""
                        initialPosition="Captain"
                        initialTreasures={0}
                        initialPegLeg={true}
                        initialEyePatch={true}
                        initialHookHand={true}
                        error={error}
                    />
                </div>
        </div>
    )
}

export default Create;