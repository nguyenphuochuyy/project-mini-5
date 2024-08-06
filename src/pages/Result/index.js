import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswerById, getQuestion, getQuestionById } from "../../helper/fetchApi";

function Result(){
    const params = useParams();
    const [finallResult , setFinalResult] = useState([]);
   

    useEffect(()=>{
        //call api để lấy câu trả lời của user by id
        const fetchApi =  async ()=>{
            const userAnswer = await getAnswerById(params.id);
            const lisQues = await getQuestionById(userAnswer[0].topicId);
            let finallResult = [];
            // lặp qua 20 câu hỏi của danh sách câu hỏi và push vào mảng mới ds 20 câu hỏi
            for(let i = 0 ;i < lisQues[0].questions.length ;i++){
                finallResult.push({
                    ...lisQues[0].questions[i],
                    ...userAnswer[0].answer.find(item=> item.questionId === lisQues[0].questions[i].id)
                })
            }
           setFinalResult(finallResult);
                        
        }
        fetchApi();
     
    },[])    
    return(
        <>
            <div className="result">
                
            </div>
        </>
    )
}
export default Result;