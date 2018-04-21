import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Quotes from '../containers/quotes.jsx';
import QuoteForm from '../containers/quotesubmit.jsx'

const Main = () => (
    <main className="blog-area main-section">
        <section>
            <div className="container" id="quotesContainer">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/quotes' component={Quotes} />
                    <Route exact path='/poems' component={Poems} />
                    <Route exact path='/stories' component={Stories} />
                    <Route exact path='/admin' component={QuoteForm} />
                </Switch>
            </div>
        </section>
    </main>
);

const Home = () => {
    return (<div>
        Home
    </div>
    );
}
const Poems = () => {
    return (
        <div>
            Poems
    </div>
    );
}
const Stories = () => {
    return (<div>
        Stories
    </div>
    );
}
const About = () => {
    return (<div>
        About
    </div>
    );
}

export default Main;