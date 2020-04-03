import React, {Component} from 'react';

class Booklist extends Component {
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>Book of Mormon</li>
                    <li>Insights from a prophet's life</li>
                    <li>I saw the Lord</li>
                </ul>
            </div>
         );
    }
}
 
export default Booklist;