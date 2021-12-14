import React, { useState } from 'react';
import { chunk } from 'lodash';
import Button from '../../components/Button';

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
      <Button onClick={() => setBoxes(boxes.concat([boxes.length]))}>Add Box</Button>
      <h2 className="font-medium text-md mb-2">My Boxing Area</h2>
      <div className="boxing-area -m-2">{boxRows}</div>
    </main>
  );
}
