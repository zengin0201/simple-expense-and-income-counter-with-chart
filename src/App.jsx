import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function App() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const add = () => {
    const newTransaction = {
      id: Date.now(),
      title: text,
      amount: Number(amount),
      type: type,
    };
    if (!text.trim() || !amount || Number(amount) <= 0) return;
    setArray([...array, newTransaction]);
    setText("");
    setAmount("");
  };
  const totalBalance = array.reduce((sum, item) => {
    return item.type === "income" ? sum + item.amount : sum - item.amount;
  }, 0);

  const deleteTransaction = (id) => {
    setArray(array.filter((item) => item.id !== id));
  };
  const chartData = [
    {
      name: "Расходы",
      value: array
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0),
      fill: "#ff4d4d",
    },
    {
      name: "Доходы",
      value: array
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0),
      fill: "#2ecc71",
    },
  ];

  return (
    <div className="finance-app">
      <div
        className="input-section"
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="all">Все</option>
          <option value="expense">Расход</option>
          <option value="income">Доход</option>
        </select>
        <input
          placeholder="Название"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Сумма"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={add}>Добавить</button>
      </div>

      <h2>Итого: {totalBalance} ₽</h2>
      <div className="history">
        {array.map((transaction) => (
          <div
            key={transaction.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              padding: "10px",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{transaction.title}</span>
            <span
              style={{
                color: transaction.type === "income" ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {transaction.type === "income" ? "+" : "-"}
              {transaction.amount} ₽
              <button onClick={() => deleteTransaction(transaction.id)}>
                🗑️
              </button>
            </span>
          </div>
        ))}
      </div>

      {array.length > 0 && (
        <div style={{ width: "100%", height: 250 }}>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
