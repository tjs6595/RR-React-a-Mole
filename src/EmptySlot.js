import React from 'react';
import { useEffect } from 'react';
import moleHillImg from '../src/molehill.png'

function EmptySlot(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={moleHillImg}/>
        </div>
    )
}

export default EmptySlot