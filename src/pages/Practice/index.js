import { Button, Radio, Space } from "antd";
import "./practice.scss"
import { useEffect, useState } from "react";
import { getQuestion, postAnswer} from "../../helper/fetchApi";
import { useParams } from "react-router-dom";
import { getCookie } from "../../helper/cookie";
function Practice(){
    const [topic , setTopic]  = useState()
    const [dataAnswer , setDataAnswer] = useState([])
    const { name } = useParams();
    const [dataQuestion , setDataQuestion] = useState([]);
    useEffect(()=>{
        const getQues = async () => {
            const listQues = await getQuestion(name);
            setTopic(listQues[0].id)
            setDataQuestion(listQues[0].questions);
        }
        getQues();
    },[name ])
    const post = async (option)=>{
        const result = await postAnswer(option)
        return result;
    }
    //handle Submit event
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const Answers = [];
        for(let i = 0 ; i < e.target.elements.length ; i++){
            if(e.target.elements[i].checked == true)
            {
                Answers.push(
                    {
                        questionId :  parseInt( e.target.elements[i].name),
                        answer : parseInt(e.target.elements[i].value) 
                    }
                )
            } 
        }
        let options = {
            userId :  parseInt(getCookie("id")) ,
            topicId :  parseInt(topic),
            answer : Answers
        }    
        const res = await postAnswer(options);
        console.log(res);
       
    }  
   
    // post data to sv
   

  
    
    return (
        <>
            <div className="practice">
            <div className="practice__head">Phần : {name}</div>
            <form  onSubmit={handleSubmit} >
            { dataQuestion.map(item =>(
                    <div className="practice__item" key={item.id}>
                         <div className="practice__question"> Câu {item.id}:{item.question}</div>
                            <Radio.Group name={item.id}>
                            <Space direction="vertical">
                             <Radio className="practice__body"  value={0}>{item.answers[0]}</Radio>
                             <Radio className="practice__body"  value={1}> {item.answers[1]}</Radio>
                             <Radio className="practice__body"  value={2}>{item.answers[2]}</Radio>
                             </Space>
                            </Radio.Group>
                </div>
            )) }
            <Button className="practice__btn"  htmlType="submit">Nộp bài</Button>
            </form>
                 
            </div>                 
        </>
    )
}
export default Practice;