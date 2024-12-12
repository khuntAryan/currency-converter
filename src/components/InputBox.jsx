import React from "react";

function InputBox({
    label,
    amount,
    amountDisable = false,
    onAmountChange = () => {}, // Default no-op function
    selectCurrency = "usd",
    onCurrencyChange = () => {}, // Default no-op function
    currencyOptions = [],
    currencyDisable = false,
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount Section */}
            <div className="w-1/2">
                <label
                    htmlFor="amount-input"
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input
                    id="amount-input"
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) =>
                        onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* Currency Selection Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange(e.target.value)
                    }
                >
                    {currencyOptions.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
