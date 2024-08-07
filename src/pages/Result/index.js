import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswerById, getQuestion, getQuestionById } from "../../helper/fetchApi";
import { Alert, Button, Radio, Space } from "antd";
import "./result.scss"
function Result(){
    const params = useParams();
    const [finallResult , setFinalResult] = useState([]);
    const [correctAns , setCorrectAns] = useState();

    useEffect(()=>{
        //call api để lấy câu trả lời của user by id
        const fetchApi =  async ()=>{
            const userAnswer = await getAnswerById(params.id);
            const lisQues = await getQuestionById(userAnswer[0].topicId);
            let finallResult = [];
            let count = 0;
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
        let count = 0 ;
        console.log(finallResult);
        for(let i = 0 ; i < finallResult.length ; i++){
            if(finallResult[i].answer === finallResult[i].correctAnswer){
                count++
            }            
        }
        setCorrectAns(count)
    },[])    
   

    
    
    return(
        <>
            <div className="result">
                <div className="result__title"> KẾT QUẢ </div>
                <div className="result__amount">
                 <span className="result__amount-correctAns">
                     Đúng : {correctAns} 
                 </span> 
                  <span className="result__amount-wrongAns"> Sai : {20-correctAns} <br/> </span> 

                   <span className="result__final">Kết quả : { correctAns < 15 ? (<span>Bạn quá gà !</span>):(<span>Pro Coder !</span>) }  </span>  
                 
            </div>
            <form  >
            { finallResult.map((item,index) =>(
                    <div className="result__item" key={item.id}>
                         <div className="result__question"> Câu {item.id}:{item.question}  { item.answer === item.correctAnswer ? (<><span className="result__item--true">Đúng</span></>) : (<><span className="result__item--false">Sai</span></>)  }</div>
                            <Radio.Group name={item.id} value={item.answer}>
                                 <Space direction="vertical">
                                {item.answers.map((itemAns , indexAns) => {
                                 let className = "";
                                    
                                 if(item.answer === indexAns){
                                    className = "result__item--selected";
                                  
                                 }
                                 if(item.correctAnswer === indexAns){
                                    className = "result__item--correct"
                                 }
                            return (
                                <Radio className={`result__body ${className}`} key={indexAns} value={indexAns}>
                                {itemAns}
                                </Radio>
                    );
                })}
                                 </Space>
                            </Radio.Group>
                         
                </div>
                
            )) }
            {/* <Button className="practice__btn"  htmlType="submit">Làm lại</Button> */}
            
            </form>
            
            </div>
        </>
    )
}
export default Result;