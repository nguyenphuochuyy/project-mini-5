import { useEffect, useState } from "react";
import { getTopic } from "../../helper/fetchApi";
import "./topic.scss"
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
function Topic(){
  const [topic , setTopic] = useState([]);
  const navigator = useNavigate();
  useEffect(()=>{
    const fetchTopic = async ()=>{
    const topicData = await getTopic();
    setTopic(topicData);
    }
    fetchTopic();
  },[])
  const handleClick = (name) => {
    // chuyển hướng sang trang có params = name
    navigator(`/practice/${name}`);
  }
    return (
        <>  
          <div className="topic">
            {topic.map(item =>(
               <div className="topic__item" key={item.id}>
                  <p className="topic__item-stt">{item.id}</p>
                  <div className="topic__item-topic"> {item.name} </div>
                  <Button className="topic__item-btn" onClick={()=> handleClick(item.name)}>Luyện tập</Button>
               </div>  
            ))}
           
          </div>
        </>
    )
}
export default Topic;