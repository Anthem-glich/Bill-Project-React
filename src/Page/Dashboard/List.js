import React, {useState} from 'react'




const List = ({ billList, handleEdit, handleDelete, minBills }) => {

    

    let totalBillAmount = 0;
    // billList.array.forEach(bill => {
    //     totalBillAmount = totalBillAmount + bill.amount;
    // });
    billList.map((bill) => {
        totalBillAmount = totalBillAmount+parseInt(bill.amount);
    })

     const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [categoryValue, setCategoryValue] = useState(getInitialState);

  const handleChange = (e) => {
    setCategoryValue(e.target.value);
  };

    

  return (
    <>
    <div className='contain-table'>
        <table className=''>
  <thead>
    <tr>
      <th>No.</th>
      {/* <th>ID</th> */}
      <th>Description</th>
      <th>
        <div>
        <select value={categoryValue} onChange={handleChange}>
            <option value="All">All Category</option>
            <option value="FoodNDining">FoodNDining</option>
            <option value="utility">Utility</option>
            <option value="Personal Care">Personal Care</option>
            <option value="shopping">Shopping</option>
            <option value="education">Education</option>
            <option value="Travel">Travel</option>
        </select>
        </div>
      </th> 
      <th>Amount</th> 
      <th>Date</th> 
      <th colSpan={2} className="text-center">Actions</th> 
    </tr>
  </thead>
   
  <tbody>
    {billList.length > 0 ? (        
        billList.map((bill, i) => (
            
            categoryValue === 'All' ? 
            <tr key={bill.id} bgcolor={minBills.includes(bill.id) ? '#D6EEEE' : null}>
                <td >{i+1}</td>
                <td>{bill.description}</td>
                <td>{bill.category}</td>
                <td>{bill.amount}</td>
                <td>{bill.date}</td>
                <td className='text-right'>
                    <button
                        onClick={() => handleEdit(bill.id)}
                        className="button muted-button"
                    >
                        Edit
                    </button>
                </td>
                <td className='text-left'>
                    <button
                        onClick={() => handleDelete(bill.id)}
                        className="button muted-button"
                    >
                        Delete
                    </button>
                </td>
            </tr>
            :
            bill.category === categoryValue ? 
            <tr key={bill.id} bgcolor={minBills.includes(bill.id) ? '#D6EEEE' : null}>
                <td >{i+1}</td>
                <td>{bill.description}</td>
                <td>{bill.category}</td>
                <td>{bill.amount}</td>
                <td>{bill.date}</td>
                <td className='text-right'>
                    <button
                        onClick={() => handleEdit(bill.id)}
                        className="button muted-button"
                    >
                        Edit
                    </button>
                </td>
                <td className='text-left'>
                    <button
                        onClick={() => handleDelete(bill.id)}
                        className="button muted-button"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        : null))
    ) : (
        <tr>
            <td>No bills</td>
        </tr>
    ) }
        <tr>
            <td>Total Amount : {totalBillAmount}</td>
        </tr>
  </tbody>
</table>
    </div>
    <div>
        {`Min no of bills that should be paid : ${minBills.length}
        (Bills are highlighted in color)
        `}
        
    </div>
    </>
  )
}

export default List



