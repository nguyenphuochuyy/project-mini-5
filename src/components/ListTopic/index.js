import { useEffect, useState } from "react"

function ListTopic(){
    const [listTopic , setListTopic] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/topics")
        .then(res => res.json())
        .then(data=>{
            setListTopic(data)
        })
    },[])
    return(
        <>
            <ul className="header__menu">
            {listTopic.map(item => (
                <li className="header__menu-item " key={item.id}>{item.name}</li>
            ))}
               
            </ul> 
        </>
    )
}
export default ListTopic