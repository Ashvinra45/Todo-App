import React, { Fragment } from 'react'

class AddBooks extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             bookName : '',
             auther : '',
             
        }
    }

    inputHandler = (e)=>{
        this.setState(()=>({
            [e.target.name] : e.target.value
        
        }))
    }
    
    saveData = (e)=>{
        e.preventDefault()
        this.props.AddBook(this.state)
        this.setState({bookName : '',auther : '',})
    }

    render (){
        return(
            <Fragment>
                <form className='mt-3' onSubmit={this.saveData} >
                    <div className='form-group' >
                        <h2>Add Books</h2>
                    </div>
                    <div className='form-group'>
                        <input type='text' 
                               className='form-control' 
                               name='bookName' 
                               value={this.state.bookName}
                               placeholder='Enter Book name....' 
                               onChange={this.inputHandler}
                               required
                               />
                    </div>
                    <div className='form-group'>
                         <input type='text' 
                           className='form-control' 
                           name='auther' 
                           value={this.state.auther}
                           onChange={this.inputHandler}
                           placeholder='Enter Auther name....'
                           required />
                           
                     </div>
                     <div className='form-group mt-2'>
                         <input type='submit' 
                           value={this.state.id}
                           className='btn btn-info'
                           onChange={this.inputHandler}
                           value = 'Add Book' 
                            />
                     </div>
                </form>
            </Fragment>
        )
    }
}

export default AddBooks