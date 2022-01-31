import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PirateForm = (props) => {
    //keep track of what is being typed via useState hook
    const { 
        initialName,
        initialQuote,
        initialImgUrl,
        initialPosition,
        initialTreasures,
        initialPegLeg,
        initialEyePatch,
        initialHookHand,
        onSubmitProp,
        error
          } = props;
    const [name, setName] = useState(initialName);
    const [quote, setQuote] = useState(initialQuote);
    const [imgUrl, setImgUrl] = useState(initialImgUrl);
    const [position, setPosition] = useState(initialPosition);
    const [treasures, setTreasures] = useState(initialTreasures);
    const [pegLeg, setPegLeg] = useState(initialPegLeg);
    const [eyePatch, setEyePatch] = useState(initialEyePatch);
    const [hookHand, sethookHand] = useState(initialHookHand);
    const [isPegchecked, setisPegChecked] = useState(true);
    const [isEyechecked, setisEyeChecked] = useState(true);
    const [isHookchecked, setisHookChecked] = useState(true);

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        onSubmitProp({name, quote, imgUrl, position, treasures, pegLeg, eyePatch, hookHand})
    }

    const onPegLegHandler = e => {
        if (pegLeg === true) {
            setisPegChecked(e.target.value === false)
            setPegLeg(false)
        } else {
            setisPegChecked(true)
            setPegLeg(true)
        }
    }

    const onEyePatchHandler = e => {
        if (eyePatch === true) {
            setisEyeChecked(false)
            setEyePatch(false)
        } else {
            setisEyeChecked(true)
            setEyePatch(true)
        }
    }

    const onHookHandHandler = e => {
        if (hookHand === true) {
            setisHookChecked(false)
            sethookHand(false)
        } 
        if(hookHand === false) {
            setisHookChecked(true)
            sethookHand(true)
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Pirate Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <p style={{color:"red"}}>{error.name && error.name.message}</p>
            </div>
            <div>
                <label>Pirate Catch Phrase:</label><br/>
                <input type="text" onChange={(e)=>setQuote(e.target.value)} value={quote}/>
                <p style={{color:"red"}}>{error.quote && error.quote.message}</p>
            </div>
            <div>
                <label>Image Url:</label><br/>
                <input type="text" onChange={(e)=>setImgUrl(e.target.value)} value={imgUrl}/>
                <p style={{color:"red"}}>{error.imgUrl && error.imgUrl.message}</p>
            </div>
            <div>
                <label># of Treasure Chests:</label><br/>
                <input type="number" onChange={(e)=>setTreasures(e.target.value)} value={treasures}/>
                <p style={{color:"red"}}>{error.treasures && error.treasures.message}</p>
            </div>
            <div>
                <label>Crew Position:</label><br/>
                <select onChange={(e)=>setPosition(e.target.value)}>
                    <option>Captain</option>
                    <option>First Mate</option>
                    <option>Quarter Master</option>
                    <option>Bootswain</option>
                    <option>Powder Monkey</option>
                </select>
                <p style={{color:"red"}}>{error.position && error.position.message}</p>
            </div>
            <div>
                <label>Peg Leg</label>
                <input type="checkbox" onChange={(e) =>onPegLegHandler(e)} value={pegLeg} checked={isPegchecked}></input>
                <label>Eye Patch</label>
                <input type="checkbox" onChange={(e)=>onEyePatchHandler(e)} value={eyePatch} checked={isEyechecked}></input>
                <label>Hook Hand</label>
                <input type="checkbox" onChange={(e)=>onHookHandHandler(e)} value={hookHand} checked={isHookchecked}></input>
            </div>
            <input type="submit" value="Submit"/>
            <Link to={"/"}><button>Cancel</button></Link>
        </form>
    )
}

export default PirateForm;