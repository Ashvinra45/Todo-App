import React, { Fragment } from 'react';

const ShowBooks = (props)=>{

   const deleteBook = (id)=>{
        props.delete(id)
    }

    return (
    <Fragment>
         
          <table className='table mt-4'>
            {
                props.book.map((book,index) => (
                    <tbody key={index}>
                      <tr>
                        
                        <td>{book.bookName}</td>
                        <td>{book.auther}</td>
                        <td><button className='btn btn-danger' type='button' onClick={()=>deleteBook(book.id)} >Delete</button>  </td>
                      </tr>
                    </tbody>
                ))
            }
           </table>
          
       </Fragment>
        
    )
}

export default ShowBooks