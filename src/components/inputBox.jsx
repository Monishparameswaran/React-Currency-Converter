import React from 'react';

function InputBox({
  label,
  className,
  Currency,
  currencyOptions = [],
  CurrencyMethod,
  CountryMethod,
  enabled,
  onCurrencyChange,
  readOnly,
  From,
  To,
}) {
  return (
    <div className="relative block">
      {/* Label (optional) */}
      {label && (
        <label
          className="block mb-2 font-semibold text-gray-700 text-sm"
          htmlFor="input-value"
        >
          {label}
        </label>
      )}

      {/* Input value and currency dropdown */}
      <div className="flex items-center border rounded-md bg-gray-100 w-full shadow-sm overflow-hidden">
        <input
          type="number"
          id="input-value"
          name="input-value"
          className="px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full border-r-0 rounded-l-md"
          onChange={(e) => {
            CurrencyMethod(Number(e.target.value));
          }}
          disabled={enabled}
          value={Currency}
          readOnly={readOnly}
        />
        <select
          className="px-4 py-2 text-gray-700 bg-white border-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>

      {/* Country dropdown (optional) */}
      {CountryMethod && (
        <div className="mt-2 flex items-center border rounded-md bg-gray-100 w-full shadow-sm overflow-hidden">
          <label
            className="block mb-2 font-semibold text-gray-700 text-sm"
            htmlFor="country-select"
          >
            Select Country
          </label>
          <select
            id="country-select"
            name="country-select"
            className="px-4 py-2 text-gray-700 bg-white border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-900 w-full"
            onChange={(e) => {
              CountryMethod(e.target.value);
            }}
          >
            {/* Populate options based on your logic */}
          </select>
        </div>
      )}
    </div>
  );
}

export default InputBox;
