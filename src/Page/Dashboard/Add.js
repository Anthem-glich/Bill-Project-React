import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';


const Add = ({ billList, setBillList, setIsAdding }) => {

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = e => {
    e.preventDefault();
    if(!description || !category || !amount || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

      const id = billList.length + 1;
      const newBill = {
        id,
        description,
        category,
        amount,
        date
      }

      billList.push(newBill);
      setBillList(billList);
      setIsAdding(false);

      Swal.fire({
        icon: 'success',
        title: 'Added',
        text: `${description} ${category} has been added.`,
        showConfirmButton: false,
        timer: 1500 
      });
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
                <h1>Add Bill</h1>
                <label htmlFor="description">description</label>
                <input
                    id="description"
                    type="text"
                    ref={textInput}
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
    </div>
  )
}

export default Add

//  {
//  id: 1,
//  description: "Dominoes",
//  category: "FoodNDining",
//  amount: "430",
//  date: "01-02-2020"
//  },