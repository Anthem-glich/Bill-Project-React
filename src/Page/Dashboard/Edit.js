import React, { useState } from 'react'
import Swal from 'sweetalert2';


const Edit = ({ billList, selectedBill, setBillList, setIsEditing }) => {

  const id = selectedBill.id;

    const [description, setDescription] = useState(selectedBill.description);
    const [category, setCategory] = useState(selectedBill.category);
    const [amount, setAmount] = useState(selectedBill.amount);
    const [date, setDate] = useState(selectedBill.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!description || !category || !amount || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const bill = {
            id,
            description,
            category,
            amount,
            date
        };

        for (let i = 0; i < billList.length; i++) {
            if (billList[i].id === id) {
                billList.splice(i, 1, bill);
                break;
            }
        }

        setBillList(billList);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${bill.description}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

  return (
   <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Bill</h1>
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
  )
}

export default Edit
