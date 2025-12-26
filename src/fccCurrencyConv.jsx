const { useState, useMemo } = React;

export function CurrencyConverter() {
  const currency = ["USD", "EUR", "GBP", "JPY"];

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 156
  };

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  // Calcul du montant de base en USD, dépend seulement de amount et from
  const baseAmount = useMemo(() => {
    if (!amount) return 0;
    return amount / rates[from];
  }, [amount, from]);

  // Montant final calculé au moment du render, dépend de baseAmount et de to
  const convertedAmount = (baseAmount * rates[to]).toFixed(2);

  return (
    <>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select value={from} onChange={e => setFrom(e.target.value)}>
        {currency.map(code => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      <select value={to} onChange={e => setTo(e.target.value)}>
        {currency.map(code => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      <p>
        Converted amount: <strong>{convertedAmount}</strong> {to}
      </p>
    </>
  );
}