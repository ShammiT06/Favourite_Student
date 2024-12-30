import { useContext } from "react"
import { Zebdatarray } from "./App"

function Favourite()
{
    const {setzebarr}=useContext(Zebdatarray)


    function removebtn(temp)
    {
        var getforce=zebarr.filter(function(fog){
            if(fog.id==temp)
            {
                return false
            }
            else
            {
                return true
            }
        
        })
        setzebarr(getforce)

    }




    const {zebarr}=useContext(Zebdatarray)
    return(<div>
        {
            zebarr.map((item)=>{
                return(<div className="flex flex-wrap justify-around m-2 text-2xl">
                    <h1>{item.value}</h1>
                    <button className="bg-red-500 p-2 text-white rounded-md" onClick={()=>{removebtn(item.id)}}>Remove</button>
        
                </div>)
            })

        }
    </div>)

}

export default Favourite