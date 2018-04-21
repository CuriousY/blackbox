import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuotesData from '../../appdata/quotes.json';
import { getQuotes } from '../actions/quotesAction';


class Quotes extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getQuotes();
    }
    render() {
        if (this.props.quotesData) {
            return (
                <QuoteBody quotes={this.props.quotesData} />
            )
        }
        else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        quotesData: state.quotesData.quotes,
        quoteNextItem: state.quotesData.newQuote
    }
}

const QuoteBody = (props) => {
    const quotesArray = props.quotes && props.quotes.quotes ? props.quotes.quotes : [];
    if (quotesArray.length > 0) {
        const posts = quotesArray.map((quote, i) =>
            <div className="col-lg-4 col-md-6 quotescard" key={i}>
                <div className="card h-100">
                    <div className="single-post post-style-1">
                        <img class="quoteimg" src="images/milky.jpg" />
                        <div class="quoteText centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis felis ac ipsum suscipit hel
                            igd
                        </div>
                        <div className="blog-info">
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
    }
    else {
        return (
            <div className="row" >
                <p>No results fetched</p>
            </div>
        );
    }


};

export default connect(mapStateToProps, { getQuotes })(Quotes);