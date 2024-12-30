import { useContext, useState} from "react"
import { Enteredarray, Zebdatarray } from "./App"

function Students()
{
    const [clicked,isclicked]=useState(null)
    const {logarr}=useContext(Enteredarray)
    const {setzebarr}=useContext(Zebdatarray)
    const {zebarr}=useContext(Zebdatarray)




    function btnclick(id)
    {
        const keys = logarr.filter((temp) => temp.id === id);

        // Append the filtered items to the existing zebarr
        setzebarr([...zebarr, ...keys]);
        console.log(zebarr)
        
        isclicked(id)
    }
   return(<div className="bg-blue-200 p-10 m-20 rounded-xl">
        {
            logarr.map((item)=>{
                return(<div className="flex flex-wrap justify-around m-2 text-2xl">
                    <h1>{item.value}</h1>
                    <button className={`bg-black text-white p-2 rounded-md ${clicked === item.id ? "opacity-50 cursor-not-allowed" : "" }`} onClick={()=>{btnclick(item.id)}} disabled={clicked===item.id} >Add to Favourite</button>
                </div>)
            })
        }
    </div>)

}
export default Students