import React, {useState} from 'react';
import { bills } from '../../data';
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';


const Dashboard = () => {
    const [billList, setBillList] = useState(bills);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedBill, setSelectedBill] = useState(null);
    const [minimumBills, setMinimumBills] = useState([]);
    

    const map1 = new Map();
    // map1. set('a', 1);
    billList.map((ele) => {
        map1.set(ele.id, ele.amount);
    });
    // map1 = new Map([...map1.entries()].sort());
    // // console.log("Our map :", "</br>");
    // // console.log(map1, "</br>");
const sortedDesc = new Map([...map1].sort((a, b) => (a[1] > b[1] ? -1 : 1)));
    let minBills = [];
    let sum = 0;
    for (let [key, value] of  sortedDesc.entries()) {
        if(sum+parseInt(value) < 5000) {
            sum = sum + parseInt(value);
            minBills.push(key);
        }
    }
    console.log('min ', minBills);

    const handleEdit = (billId) => {
        const [bill] = billList.filter(bill => bill.id === billId);

        setSelectedBill(bill);
        setIsEditing(true);
    }

     const handleDelete = (billId) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [bill] = billList.filter(bill => bill.id === billId);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${bill.description} 's data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setBillList(billList.filter(bill => bill.id !== billId));
            }
        });
    }


   return (
    <div className='container'>

        {
             !isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        billList={billList}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        minBills={minBills}
                    />
                </>
            )}
            {isAdding && (
                <Add
                    billList={billList}
                    setBillList={setBillList}
                    setIsAdding={setIsAdding}
                />
            )}
            {isEditing && (
                <Edit
                    billList={billList}
                    selectedBill={selectedBill}
                    setBillList={setBillList}
                    setIsEditing={setIsEditing}
                />
            )}
    </div>
  )
}

export default Dashboard;