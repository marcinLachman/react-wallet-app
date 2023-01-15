import { createContext, useState, useEffect } from 'react';
import nextId from "react-id-generator";

export const AppContext = createContext();

const initialStateIncome = [
  {
    id: 0,
    incomeNumber: 0,
    incomeText: '', 
  }
];

const initialStateOutcome = [
  {
    id: 0,
    outcomeNumber: 0,
    outcomeText: '',
  }
];

const AppProvider = ({ children }) => {
  const [ dataIncome, setDataIncome ] = useState(initialStateIncome);
  const [ dataOutcome, setDataOutcome ] = useState(initialStateOutcome);

  const [ income, setIncome ] = useState(0);
  const [ outcome, setOutcome ] = useState(0);
  const [ summary, setSummary ] = useState(0);

  const dataId = nextId();

  useEffect( () => {
    let valueIncome = dataIncome.map(value => value.incomeNumber).reduce((a, b) => Number(a) + Number(b));
    let valueOutcome = dataOutcome.map(value => value.outcomeNumber).reduce((a, b) => Number(a) + Number(b));
    let valueSummary = valueIncome - valueOutcome;

    setIncome(valueIncome);
    setOutcome(valueOutcome);
    setSummary(valueSummary);

  }, [dataIncome, dataOutcome]);

  const addIncome = (incomeNumber, incomeText ) => {
    setDataIncome([...dataIncome, 
      {
        id: dataId,
        incomeNumber,
        incomeText,
      }]);
  };

  const addOutcome = (outcomeNumber, outcomeText ) => {
    setDataOutcome([...dataOutcome, 
      {
        id: dataId,
        outcomeNumber,
        outcomeText,
      }]);
  };

  const deleteIncome = ( id ) => {
    const listItems = dataIncome.filter( (item) => item.id !== id);
    setDataIncome(listItems);
  };

  const deleteOutcome = ( id ) => {
    const listItems = dataOutcome.filter( (item) => item.id !== id);
    setDataOutcome(listItems);
  };

  return (
    <AppContext.Provider value={{
      dataIncome,
      dataOutcome,
      income,
      outcome,
      summary,
      addIncome,
      addOutcome,
      deleteIncome,
      deleteOutcome,
    }}>
      { children }
    </AppContext.Provider>
  );
};

export default AppProvider;