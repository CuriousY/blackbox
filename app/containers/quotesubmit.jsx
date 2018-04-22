import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { postQuote } from '../actions/quotesAction'

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        let categories = [];

        if (this.refs.qcategories.selectedOptions && this.refs.qcategories.selectedOptions.length > 0) {
            for (var i = 0; i < this.refs.qcategories.selectedOptions.length; i++) {
                categories.push(this.refs.qcategories.selectedOptions[i].value)
            }
        }
        const post = {
            author: this.refs.author.value,
            quoteText: this.refs.quoteText.value,
            categories: categories

        };
        this.props.postQuote(post);
    }
    render() {
        return (
            <main className="blog-area main-section form-area">
                <form className="container quote-form" onSubmit={this.onSubmit}>
                    <div className="container">
                        <div className="form-group quote-form-heading">
                            <span>Enter your quotes here </span>
                        </div>
                        <div className="form-group">
                            <input type="text" ref="author" className="form-control" placeholder="Enter your name" name="username" id="username" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" ref="quoteText" id="quotetext" name="quotetext" placeholder="Your quote here" aria-label="With textarea"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Choose categories</label>
                            <select ref="qcategories" multiple="multiple" className="form-control selectpicker" name="categories" id="qcategories">
                                <option>Life</option>
                                <option>Motivation</option>
                                <option>Travel</option>
                                <option>Happiness</option>
                                <option>Money</option>
                            </select>
                        </div>
                        <div className="form-group btn-container">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>

            </main>

        )
    }
}

QuoteForm.propTypes = {
};

export default connect(null, { postQuote })(QuoteForm);