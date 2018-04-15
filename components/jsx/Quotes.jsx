import React, { Component } from 'react';


class Quotes extends Component {
    render() {
        return (
               QuoteBody()
        )
    }
}

const QuoteBody = () => 
{
    let table = [];

    const QuoteElement = <div className="col-lg-4 col-md-6 quotescard">
        <div className="card h-100">
            <div className="single-post post-style-1">

                <div className="blog-image">
                    <img src="images/marion-michele-330691.jpg" alt="Blog Image" />
                </div>
                <div className="blog-info">
                    <h4 className="title">
                        <a href="#">
                            <b>dummy text</b>
                        </a>
                    </h4>
                    <ul className="post-footer">
                        <li>
                            <a href="#">
                                <i className="fas fa-heart"></i>34</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-comment"></i>23</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;

    for(var i=0;i<12;i++){
        table.push(QuoteElement);
    }

    return table;

}

export default Quotes;