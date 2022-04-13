import { useState } from "react";
import "./styles.css";

export default function App() {
  /* income */
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [descriptionList, setDescriptionList] = useState([]);
  const [amountList, setAmountList] = useState([]);

  const [balance, setBalance] = useState(0);

  //expenses
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expAmount, setExpAmount] = useState("");

  const [expDescList, setExpDescList] = useState([]);
  const [expAmountList, setExpAmountList] = useState([]);

  const handleSubmit = (e) => {
    const descriptions = [...descriptionList, description];
    setDescriptionList(descriptions);
    const amounts = [...amountList, amount];
    setAmountList(amounts);
    setBalance(balance + amount);
    setAmount(0);
    setDescription("");
  };

  const handleExpense = () => {
    const expenseDescriptions = [...expDescList, expenseDesc];
    setExpDescList(expenseDescriptions);
    const expenseAmounts = [...expAmountList, expAmount];
    setExpAmountList(expenseAmounts);
    setBalance(balance - expAmount);
    setExpAmount(0);
    setExpenseDesc("");
  };

  return (
    <div className="App">
      {/* income form */}
      <h1 id="title">BUDGET KEEPER</h1>

      <form className="income-form">
        <input
          className="input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          placeholder="Enter amount"
        />
        <button className="button" type="button" onClick={handleSubmit}>
          Click
        </button>
      </form>

      {/* expense form*/}

      <form className="expense-form">
        <input
          className="input"
          type="text"
          value={expenseDesc}
          onChange={(e) => setExpenseDesc(e.target.value)}
          placeholder="Enter description"
        />
        <input
          className="input"
          type="number"
          value={expAmount}
          onChange={(e) => setExpAmount(e.target.valueAsNumber)}
          placeholder="Enter amount"
        />
        <button className="button" type="button" onClick={handleExpense}>
          Click
        </button>
      </form>

      <div className="balance">
        <h3>BALANCE</h3>
        <p id="total">{`${balance} kn`}</p>
      </div>

      {/* income list */}
      <div className="lists">
        <ul className="income-list">
          {descriptionList.map((val, index) => {
            return (
              <li className="item" key={index}>
                {`${val} - 
                ${amountList[index]} kn`}
              </li>
            );
          })}
        </ul>

        {/* expense list */}

        <ul className="expense-list">
          {expDescList.map((val, index) => {
            return (
              <li className="item" key={index}>
                {`${val} - 
                ${expAmountList[index]} kn`}
              </li>
            );
          })}
        </ul>
      </div>
      <footer id="footer">CODED BY KODER90</footer>
    </div>
  );
}
