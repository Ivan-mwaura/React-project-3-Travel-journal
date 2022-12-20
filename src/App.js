import React from "react";
import Navbar from "./Components/Navigation";
import data from './Components/Data'
import Card from './Components/Card'

function App (){
  const apidata = data.map(database =>{
    return < Card
              key = {database.id}
              {...database}
          />
  })
  return(
    <div className="container">
      <div className="second--container">
      <Navbar/>
        <section>
          {apidata}
        </section>
      </div>
    </div>
  )
}
export default App;