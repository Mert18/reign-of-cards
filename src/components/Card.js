import React, {Fragment, useContext} from 'react';
import {ThemeContext} from '../lib/context';
import ReactCardFlip from 'react-card-flip';

const Card = ({img, title}) => {

    const {flipped, setFlipped} = useContext(ThemeContext);

    const Front = () => (
        <Fragment>
            <div className="front__img">
                <img src={img} alt={title} />
            </div>
        </Fragment>
    )
    const Back = () => (
        <Fragment>
            <img src="/images/cards/card-back.svg" alt="question mark" />
        </Fragment>
    )

    return (
            <div className="card">
                <ReactCardFlip isFlipped={flipped} flipDirection={'vertical'} flipSpeedFrontToBack={1} flipSpeedBackToFront={1}>
                    <div className="front">
                        <Front />
                    </div>

                    <div className="back">
                        <Back />
                    </div>
                </ReactCardFlip>
            </div>
    )
}

export default Card
