import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note({id, text, date, handleDeleteNote}) {

  return (
    <div className='note'>
        <p className="note-text">{text}</p>
        <div className="note-footer">
            <time>{date}</time>
            <MdDeleteForever onClick={()=>handleDeleteNote(id)} className="icon"/>
        </div>
    </div>
  )
}

export default Note