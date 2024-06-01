import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [count, setCount] = useState(0)

  function utility(length) {
   return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "c", "D", "E", "F"];
    let hexColor = "#";

    for(let i=0; i<6; i++){
      hexColor += hex[utility(hex.length)];
      
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if(setColor === "rgb") handleCreateRandomRgbColor()
    else handleCreateRandomHexColor()
  },[setColor]);

  return (
   <div style={{
    backgroundColor:color,
    width:"100vw",
    height:"100vh",
  
   }}>
    <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
    <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
    <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      color:'white',
      fontSize:"20px",
      marginTop:"50px",
      flexDirection:'column'
    }}>
      <div>
      <h1>{color}</h1>
      </div>
      <div>
      <h1>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h1>
      </div>
    </div>
   </div>
   
  )
}

export default App
