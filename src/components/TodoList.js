import React, { Component, Fragment } from 'react'
import ShowBooks from './ShowBooks'
import AddBooks from './AddBooks';


 class TodoList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bookList : [
                 {id : 1,bookName : 'ReactJS',auther:'Robin Wieruch'},
                 {id : 2,bookName: 'ReactNative', auther :'Adam Boduch'},
                 {id : 3,bookName : 'Flutter', auther :'Marco L. Napoli'}
             ],
             bookAddedMsg : '',
             bookDeletedMsg : ''
        }
    }
    
    AddBook = (info)=>{
        console.log(info)
        this.setState({
            bookList : [...this.state.bookList, info]
        });
        this.setState({bookAddedMsg : 'Your Book Added Successfully'})

        setTimeout(()=>{
        this.setState({bookAddedMsg : ''})
        },2500)
    }

    removeBook = (id)=>{
        if (window.confirm('Are You Sure To Delete This Book?')) {
            
            const filteredData = this.state.bookList.filter((book)=> book.id !== id)
            
            this.setState({bookList : filteredData})
            
            this.setState({bookDeletedMsg : 'Your Book Delete Successfully'})
            
            setTimeout(()=>{
                this.setState({bookDeletedMsg : ''})
            },2000)
        }
    }
        
    render() {
        return (
            <Fragment>
                {
                    this.state.bookAddedMsg ? <div className='alert alert-success mt-2'>{this.state.bookAddedMsg}</div> : null
                }
                {
                    this.state.bookDeletedMsg ? <div className='alert alert-danger mt-2'>{this.state.bookDeletedMsg}</div> : null
                }
                <AddBooks  AddBook={this.AddBook}/>
                <ShowBooks delete={this.removeBook} book={this.state.bookList} />
            </Fragment>
        )
    }
}

export default TodoList
