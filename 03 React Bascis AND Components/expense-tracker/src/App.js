import ExpenseItemList from './components/Expenses/ExpenseItemList';
import './components/main.css';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      date: new Date(2021, 2, 28),
      amount: 249.77,
    },
    {
      id: 2,
      title: 'Mobile Repair',
      date: new Date(2021, 3, 10),
      amount: 449.77,
    },
    {
      id: 3,
      title: 'Turion Fees',
      date: new Date(2021, 3, 15),
      amount: 749.77,
    },
    {
      id: 4,
      title: 'Restaurent Bill',
      date: new Date(2021, 4, 20),
      amount: 549.77,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList expense={expenses}></ExpenseItemList>
    </div>
  );
}

export default App;
