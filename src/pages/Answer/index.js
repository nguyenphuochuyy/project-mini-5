import { useEffect, useState } from "react";
import { getAnswerByUId, getTopic, getTopicById } from "../../helper/fetchApi";
import { getCookie } from "../../helper/cookie";
import "./history.scss"
import { Link } from "react-router-dom";
function Answer(){
    const [dataAnswer , setDataAnswer] = useState([]);
    useEffect(()=>{
        const uId = getCookie('id')
        const fetchApi = async () => {
            const listAns = await getAnswerByUId(uId);
            await enrichDataWithTopicNames(listAns)
            setDataAnswer(listAns.reverse())
        }
        async function enrichDataWithTopicNames(data) {
            for (const item of data) {
                const topicName = await getTopicById(item.topicId);
                console.log(topicName);
                
                item.topicName = topicName[0]?.name || 'Unknown Topic'; // Gán topicName cho từng đối tượng trong mảng
            }
            return data;
        }
        
        fetchApi(); 
    } , [])

    return (
        <>
            <div className="history">
                <table className="history__table">
                    <thead>
                        <td>
                            ID
                        </td>
                        <td>
                            Topic ID
                        </td>
                        <td>
                           
                        </td>
                        
                    </thead>
                    <tbody>
                        {
                            dataAnswer.map((item , index)=>(
    
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.topicName}</td>
                                <td> <Link to={`/result/${item.id}`}>Xem chi tiết</Link> </td>
                            </tr>
                            ))
                        } 
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Answer;  