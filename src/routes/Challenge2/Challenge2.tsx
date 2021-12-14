import React, { useState } from 'react';
import { chunk } from 'lodash';

export default function Challenge2() {
  const [boxes, setBoxes] = useState<number[]>([]);

  const boxesChunked: number[][] = chunk(boxes, 8);

  const boxRows: JSX.Element[] = boxesChunked.map((row, index) => (
    <div className="box-row sm:flex" data-testid="box-row" key={index}>
      {row.map((box) => (
        <div
          className="box bg-amber-300 p-4 w-full m-2 flex content-center justify-center"
          key={box}
        >
          {box}
        </div>
      ))}
    </div>
  ));

  return (
    <main>
      <h1 className="font-semibold text-lg mb-2">Challenge 2!</h1>
      <button
        type="button"
        onClick={() => setBoxes(boxes.concat([boxes.length]))}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
      >
        Add Box
      </button>
      <h2 className="font-medium text-md mb-2">My Boxing Area</h2>
      <div className="boxing-area -m-2">{boxRows}</div>
    </main>
  );
}
