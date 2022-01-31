import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
    const [singlePirate, setSinglePirate] = useState({})
    const { _id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${_id}`)
            .then(res => {
                console.log(res);
                setSinglePirate(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    }, [_id])
    
    return (
        <div>
            <h1 style={{fontSize:"40px"}}>{singlePirate.name}</h1>
            <img style={{height:"100px"}} src={singlePirate.imgUrl} alt="pirate selfie"></img>
            <p style={{fontSize:"20px"}}><b>Catch Phrase:</b> {singlePirate.quote}</p>
            <table style={{margin:"0 auto"}}>
                <thead>
                    <th style={{fontSize:"20px"}}>About</th>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Position:</b> {singlePirate.position}</td>
                    </tr>
                    <tr>
                        <td><b>Treasures:</b> {singlePirate.treasures}</td>
                    </tr>
                    <tr>
                        <td>{singlePirate.pegLeg === true ? <p><b>Peg Leg:</b> Yes</p> : <p><b>Peg Leg:</b> No</p>}</td>
                    </tr>
                    <tr>
                        <td>{singlePirate.eyePatch === true ? <p><b>Eye Patch:</b> Yes</p> : <p><b>Eye Patch:</b> No</p>}</td>
                    </tr>
                    <tr>
                        <td>{singlePirate.hookHand === true ? <p><b>Hook Hand:</b> Yes</p> : <p><b>Hook Hand:</b> No</p>}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={"/pirate/" + singlePirate._id + "/edit"}><button>Edit</button></Link>
            <Link to={"/"}><button>Cancel</button></Link>
        </div>
    )
}
    
export default Detail;