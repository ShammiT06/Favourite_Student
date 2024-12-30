import { createContext, useState } from "react"
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Student from "./Students"
import Favourite from "./Favourite"
const Enteredarray=createContext()
const Zebdatarray=createContext()
function App()
{
    const[zebarr,setzebarr]=useState([])
    const [logarr,setlogarr]=useState([{id:1,value:"Sanjay"},{id:2,value:"Barath"},{id:3,value:"Manish"},{id:4,value:"Karthik"},{id:5,value:"Dinesh"}])
    return(<div>
        <Enteredarray.Provider value={{logarr,setlogarr}}>
        <Zebdatarray.Provider value={{zebarr,setzebarr}}>   
           <BrowserRouter>
           <div className="bg-blue-200 p-10 m-20 rounded-xl flex justify-around flex-wrap  text-4xl text-red-600 font-medium">
           <Link to={"/"}>List of Students</Link>
           <Link to={"/fav"}>Favourite Students</Link>
           </div>


           <Routes>
            <Route path="/" element={<Student/>}></Route>
            <Route path="/fav" element={<Favourite/>}></Route>
           </Routes>
           </BrowserRouter> 
        </Zebdatarray.Provider>
        </Enteredarray.Provider>
        

    </div>)

}
export default App
export {Enteredarray}
export {Zebdatarray}