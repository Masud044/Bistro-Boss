import { useEffect, useState } from "react";


const UseMenu =()=>{
    const [populer,setPopuler]= useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
           
             setPopuler(data);
             setLoading(false);
        })
        
    },[]) 
    return [populer,loading]    
}
export default UseMenu;