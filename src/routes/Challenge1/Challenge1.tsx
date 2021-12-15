import React, { useState } from 'react';
import Decimal from 'decimal.js';
import Field from '../../components/Field';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Challenge1() {
  const defaultDecimalValue = '';
  const [input1, setInput1] = useState(defaultDecimalValue);
  const [input2, setInput2] = useState(defaultDecimalValue);
  const [error, setError] = useState(false);
  const [sums, setSums] = useState<number[]>([]);

  function addValues(firstValue: string, secondValue: string): void {
    setError(false);

    if (/^[0-9]+([,.][0-9]+)?$/g.test(firstValue) && /^[0-9]+([,.][0-9]+)?$/g.test(secondValue)) {
      Decimal.set({ toExpNeg: -20 });
      setSums([...sums, new Decimal(firstValue).plus(secondValue).toNumber()]);
    } else {
      setError(true);
    }

    // Clear Inputs
    setInput1(defaultDecimalValue);
    setInput2(defaultDecimalValue);
  }

  const allSums = sums.length ? sums.reduce((a, b) => a.plus(b), new Decimal(0)).toString() : 0;

  return (
    <main>
      <h1 className="font-semibold text-lg mb-2">Challenge 1!</h1>
      <h2 className="font-medium text-md mb-2">Calculator</h2>
      <form>
        <Field label="Value 1" labelFor="value-1">
          <Input
            id="value-1"
            value={input1}
            onChange={(event) => setInput1(event.target.value)}
            placeholder="0.0000000"
          />
        </Field>
        <Field label="Value 2" labelFor="value-2">
          <Input
            id="value-2"
            value={input2}
            onChange={(event) => setInput2(event.target.value)}
            placeholder="0.0000000"
          />
        </Field>
        <Button onClick={() => addValues(input1, input2)}>Add Sum to Collected Sums</Button>
      </form>
      {error && (
        <div className="inline-block text-sm font-medium bg-red-500 text-white px-4 py-4 rounded my-2">
          We only accept valid decimal numbers, no sums have been added
        </div>
      )}
      <h3 className="font-medium text-md mb-2">Collected Sums</h3>
      <p>Total Number is: {allSums}</p>
    </main>
  );
}
