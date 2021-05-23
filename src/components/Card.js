import React, {useState, useEffect, Fragment} from 'react';

import ReactCardFlip from 'react-card-flip';

const Card = ({img, title}) => {

    const [flipped, setFlipped] = useState(true);


   useEffect(() => {
        setTimeout(() => {
            setFlipped(!flipped);
        }, 4000)
    }) 
    
    const Front = () => (
        <Fragment>
            <div className="front__img">
                <img src={img} alt={title} width="250px" />
            </div>

            <div className="front__txt">
                <h2>{title}</h2>
            </div>
        </Fragment>
    )
    const Back = () => (
        <Fragment>
            <img src="/images/cards/quest.svg" alt="question mark" />
        </Fragment>
    )

    const handleFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <div className="card">
            <ReactCardFlip isFlipped={flipped} flipDirection={'vertical'} flipSpeedFrontToBack={1} flipSpeedBackToFront={1}>
                <div className="front" onClick={() => {handleFlip()}}>
                    <Front />
                </div>

                <div className="back" onClick={() => {handleFlip()}}>
                    <Back />
                </div>
            </ReactCardFlip>

        </div>

    )
}

export default Card
