import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


const Header = ({ setIsAdding }) => {



  return (
    <>
    <header>
      
        <h1>Bill Management Application</h1>
        <div style={{marginTop: '30px', marginBottom: '18px'}}>
            <button 
            onClick={() => setIsAdding(true)}
            className='round-button'
            >
                Add Bill
            </button>
            
        </div>
        
    </header>
    </>
  )
}

export default Header