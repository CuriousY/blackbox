import React, { Component } from 'react';
import QuotesData from '../../appdata/quotes.json';


class Quotes extends Component {

    constructor(props) {
        super(props);
        this.state = { quote: QuotesData };
    }
    componentDidMount() {
        console.log('inside did mount ' + this.state.quote.quotes[0]);

    }
    render() {
        console.log('inside render ' + this.state.quote.quotes.length)

        return (
            <QuoteBody quotes={this.state.quote.quotes} />
        )
    }
}

function QuoteBody(props) {
    console.log('inside quote body ' + props.quotes);
    const quotesArray = props.quotes;

    const posts = quotesArray.map((quote,i) =>
        <div className="col-lg-4 col-md-6 quotescard" key={i}>
            <div className="card h-100">
                <div className="single-post post-style-1">
                    <div className="blog-image">
                        <img src={quote.imagePath} alt="Blog Image" />
                    </div>
                    <div className="blog-info">
                        <h4 className="title">
                            <a href="#">
                                <b>{quote.text}</b>
                            </a>
                        </h4>
                        <ul className="post-footer">
                            <li>
                                <a href="#">
                                    <i className="fas fa-heart"></i>{quote.likes}</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-comment"></i>{quote.comments.length}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="row" >
            {posts}
        </div>
    );

};

export default Quotes;