import React from 'react';
import {useState} from 'react';
import Mole from './Mole.js';
import EmptySlot from './EmptySlot.js';



function MoleContainer(props){
    const [moleUp, setMoleUp] = useState(false);

    const handleClick = (e) => {
      props.setScore(props.score + 1);
      setMoleUp(false);
    }

    let displayMole = moleUp ? <Mole setScore={props.setScore} toggle={setMoleUp} handleClick={handleClick} /> : <EmptySlot toggle={setMoleUp} />

    return(
        <div className='moleContainer' style={{'display': 'inline-block', 'width': '10vw'}}>
          {displayMole}
        </div>
    )
}


export default MoleContainer