import { useState } from 'react'
import data from './components/data'
import './App.css'

function App() {
  const [selected, setselected] = useState(null)
  const [enablemMltiSelection , setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function clickSingleHandler (getElementId) {
    console.log(getElementId);
    setselected(getElementId);
  }

  function clickMultipleHandler(getElementId) {
      let copyMultiple = [...multiple];
      const findIndexOfCurrentId = copyMultiple.indexOf(getElementId);
      console.log(findIndexOfCurrentId);
      if (findIndexOfCurrentId == -1) copyMultiple.push(getElementId)
      else copyMultiple.splice(findIndexOfCurrentId , 1) 
      setMultiple(copyMultiple)
  }

 console.log(selected, setMultiple);

  return (
    <div className='wrapper'>
      <button onClick={() => setEnableMultiSelection(!enablemMltiSelection)}>Enable Multi selection</button>
      <div className='accordian'>
        { data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item'>
              <div onClick={enablemMltiSelection ? 
                () => clickMultipleHandler(dataItem.id) : 
                () => clickSingleHandler(dataItem.id)} className='title'>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? ( 
                 <div className='content'>{dataItem.answer}</div> 
                 ) : null
              }

            </div>
          ))
        ) : <div>Data is Empty</div> } 
      </div>
    </div>
  )
}  

export default App
