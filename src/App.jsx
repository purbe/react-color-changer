import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
    const changeColor = color => setColor(color);

  return (
      <>
          <div style={{background:color}} className="w-full h-screen" >
          <section className="relative overflow-hidden  py-8">
              <div className="container relative z-10 mx-auto px-4" >
                  <div className="-m-8 flex flex-wrap items-center justify-between">
                      <div className="w-auto p-8 border ">
                          <ul className="-m-5 flex flex-wrap items-center ">
                              <li className="p-5 font-medium ">
                                  <button color = "white" className="font-medium text-gray-700 hover:text-gray-800 " onClick={()=>setColor("white")}>
                                      white
                                  </button>
                              </li>
                              <li className="p-5 font-medium">
                              <button  className="font-medium text-amber-50 hover:text-white bg-red-800 " onClick={()=>setColor("red")} >
                                      Red
                                  </button>
                              </li>
                              <li className="p-5 ">
                                  <button className="font-medium text-gray-600 hover:text-gray-700 bg-green-700 " onClick={()=>setColor("green")} >
                                      Green
                                  </button>
                              </li>
                              <li className="p-5 ">
                                  <button className="font-medium text-gray-600 hover:text-gray-700 bg-yellow-600" onClick={()=>changeColor("yellow")} >
                                      Yellow
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
          </div>
      </>
  )
}

export default App
