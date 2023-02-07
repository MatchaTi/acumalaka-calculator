import { useState } from "react";
import Button from "./Button";
import { TbBackspace } from "react-icons/tb";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    setExpression(expression + e.target.value);
  }

  function handleEqual() {
    try {
      setResult(eval(expression).toString());
    } catch (error) {
      setResult("error");
    }
  }

  function handleClear() {
    setExpression("");
    setResult("");
  }

  function deleteHandler() {
    setExpression(expression.slice(0, -1));
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-slate-900">
      <h1 className="text-slate-200 text-3xl font-main font-bold mb-10">
        Simple Acumalaka Calculator
      </h1>
      <div className="grid grid-cols-4 grid-rows-5 gap-3 bg-slate-800 p-5 rounded-xl">
        <div className="col-span-4  text-slate-200 text-right px-1">
          <input
            className="bg-transparent text-right  text-slate-400 font-main"
            type="text"
            value={expression}
            readOnly
          />
          <h2 className="text-3xl font-main font-bold">{result}</h2>
        </div>
        {/* baris 1 2 3 + */}
        <Button value="1" onClick={handleClick}>
          1
        </Button>
        <Button value="2" onClick={handleClick}>
          2
        </Button>
        <Button value="3" onClick={handleClick}>
          3
        </Button>
        <Button className="bg-[#005DB2]" value="+" onClick={handleClick}>
          +
        </Button>
        {/* baris 4 5 6 - */}
        <Button value="4" onClick={handleClick}>
          4
        </Button>
        <Button value="5" onClick={handleClick}>
          5
        </Button>
        <Button value="6" onClick={handleClick}>
          6
        </Button>
        <Button className="bg-[#005DB2]" value="-" onClick={handleClick}>
          -
        </Button>
        {/* baris 7 8 9 * */}
        <Button value="7" onClick={handleClick}>
          7
        </Button>
        <Button value="8" onClick={handleClick}>
          8
        </Button>
        <Button value="9" onClick={handleClick}>
          9
        </Button>
        <Button className="bg-[#005DB2]" value="*" onClick={handleClick}>
          *
        </Button>
        {/* baris . 0 = / */}
        <Button value="." onClick={handleClick}>
          .
        </Button>
        <Button value="0" onClick={handleClick}>
          0
        </Button>
        <Button value="/" onClick={handleClick}>
          /
        </Button>
        <Button className="bg-[#1991FF] text-slate-200 row-span-2" value="=" onClick={handleEqual}>
          =
        </Button>
        {/* clear delete */}
        <Button className="bg-[#616161] col-span-2" onClick={handleClear}>
          C
        </Button>
        <Button className="bg-[#616161]" onClick={deleteHandler}>
          <TbBackspace />
        </Button>
      </div>
    </div>
  );
}
