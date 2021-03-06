import React, { Component } from 'react';
class ToggleShelf extends Component {
    state={
        //set the shelf to none
        shelf: 'none'
    }
    //mount func
    componentDidMount() {
        const {book}=this.props
            if(book.shelf){
                this.setState({
                    shelf: book.shelf
                    })
        }
    }


//change the shelf
shelfChange = (event)=>{

            this.setState({
            shelf: event.target.value
        })
            this.props.onToggleShelf(this.props.book, event.target.value)
}


    render() { 
      
        return ( 
            <div className="book-shelf-changer">
                              <select
                              onChange={this.shelfChange}
                              value={this.props.book.shelf}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
         );
    }
}
 
export default ToggleShelf;
