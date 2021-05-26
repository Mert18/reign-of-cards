import React, {useEffect, useState} from 'react';
import Layout from './core/Layout';
import randomColor from 'randomcolor';

const App = () => {

    const [color, setColor] = useState("green");

    useEffect(() => {
        setTimeout(() => {
            setColor(randomColor());
        }, 3000)
    }, [color]);

    const divStyle = {
        color: color,
      };

    return(
        <Layout>
            <div className="main">
                <div className="main__left">
                    <div>
                        <h1>Welcome to</h1>
                    </div>
                    <div style={divStyle} className="main__left__colorized">
                        <h1>Reign of Cards</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default App;