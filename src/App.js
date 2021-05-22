import React from 'react';
import Layout from './core/Layout';

import Card from './components/Card';

const App = () => {
    return(
        <Layout>
            <div className="main">
                <div className="main__left">
                    <div>
                        <h1>Welcome to</h1>
                    </div>
                    <div>
                        <h1>Reign of Cards</h1>
                    </div>
                </div>

                <div className="main__right">
                    <Card img="/images/cards/theatre.svg" title="Theatre of Joy" />
                </div> 
            </div>
        </Layout>
    )
}

export default App;