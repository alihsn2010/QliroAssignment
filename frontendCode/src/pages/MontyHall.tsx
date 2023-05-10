import React, { useState } from 'react'
import InputForm from '../Components/InputForm'
import Home from '../Components/Layout'
import Results from '../Components/Results'
import { IResult, IResultInitialValues } from '../Interfaces'

const MontyHall: React.FC = () => {
  const [result, setResults] = useState<IResult>(IResultInitialValues)
  
  
  // git testing by SAH
  // let testResult ='' 

  const saveResults = (data: IResult) => {
    setResults(data)
  }

  const resetState = () => {
    setResults(IResultInitialValues)
  }

  return (
    <Home>
      {result.noOfSimulations === 0 ? (
        <InputForm saveResults={saveResults} />
      ) : (
        <>
          <Results resetMain={resetState} {...result} />
        </>
      )}
    </Home>
  )
}

export default MontyHall
