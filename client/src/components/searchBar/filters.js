import React from "react";

export default function Filters({
  setHeight,
  setWeight,
  descendent,
  setDescendent,
  setTemperament,
  setCurrent
}) {
  



  let orderByHeight = (e) => {
    // Por alguna razon el e.target.value es un string XD
    // Sin el return tampoco funka loko XD 
    switch(parseInt(e.target.value)) {
        case 0: 
            return setHeight((prev) => ({ ...prev, actived: false, min: false}))
        case 1:
            return setHeight((prev) => ({ ...prev, actived: true, min: true }))
        case 2:
            return setHeight((prev) => ({ ...prev, actived: true, min: false }))

    }      
  };


  let orderByWeight = (e) => {
    switch(parseInt(e.target.value)) {
        case 0: 
            return setWeight((prev) => ({ ...prev, actived: false, min: false}))
        case 1:
            return setWeight((prev) => ({ ...prev, actived: true, min: true }))
        case 2:
            return setWeight((prev) => ({ ...prev, actived: true, min: false }))

    }     
  };

  let changeDescendent = (e) => {
    e.preventDefault()
    setDescendent(!descendent);
  };

  let cleanFiltered = (e) => {
    e.preventDefault()
    setHeight({ actived: false, min: false });
    setWeight({ actived: false, min: false });
    setDescendent(false);
    setTemperament("");
    setCurrent(0)
  };

  return (
    <div>
      <button onClick={changeDescendent}>{descendent ? "Asc" : "Desc"}</button>

        <select onChange={orderByHeight}>
            <option value={"0"}>empty</option>
            <option value={"1"}>Height-min</option>
            <option value={"2"}>Height-max</option>
        </select>

        <select onChange={orderByWeight}>
            <option value={"0"}>empty</option>
            <option value={"1"}>Weight-min</option>
            <option value={"2"}>Weight-max</option>
        </select>

      <button onClick={cleanFiltered}>Clean Filter</button>
    </div>
  );
}
