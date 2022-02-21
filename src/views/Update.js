import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import PirateForm from '../components/PirateForm';

const Update = (props) => {
    const {_id} = useParams();
    const[pirate, setPirate] = useState("");
    const[loaded, setLoaded] = useState(false);
    const history = useHistory();

    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${_id}`)
        .then(res => {
            setPirate(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [_id]);

    const updatePirate = pirate => {
        axios.put(`http://localhost:8000/api/pirate/${_id}`, pirate)
        .then(res => {
            console.log(res)
            setError([])
            history.push("/")
        })
        .catch(err => {
            console.log(err.response.data.error.errors)
            setError(err.response.data.error.errors)
    })
    }

    return (
        <div>
            {loaded && (
                    <div>
                        <h1 className="header">Update Pirate Yargins</h1>
                        <PirateForm
                            onSubmitProp={updatePirate}
                            initialName={pirate.name}
                            initialQuote={pirate.quote}
                            initialImgUrl={pirate.imgUrl}
                            initialPosition={pirate.position}
                            intialTreasures={pirate.treasures}
                            initiailPegLeg={pirate.pegLeg}
                            initialEyePatch={pirate.eyePatch}
                            intialHookHand={pirate.hookHand}
                            error={error}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Update;