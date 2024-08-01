import { Button, Radio, Space } from "antd";
import "./practice.scss"
import { useEffect, useState } from "react";
import { getQuestion } from "../../helper/fetchApi";
import { useParams } from "react-router-dom";
function Practice(){
    const { name } = useParams();
    const [dataQuestion , setDataQuestion] = useState([]);
    useEffect(()=>{
        const getQues = async () => {
            const listQues = await getQuestion(name);
           
            setDataQuestion(listQues[0].questions);
        }
        getQues();
    },[name])
    console.log(dataQuestion);
    return (
        <>
            <div className="practice">
            <div className="practice__head">Phần HTML</div>
            { dataQuestion.map(item =>(
                <div className="practice__item" key={item.id}>
                    <div className="practice__question"> Câu {item.id}: {item.question}</div>
                    <Radio.Group >
                    <Space direction="vertical">
                    <Radio className="practice__body" value={1}>{item.answers[0]}</Radio>
                    <Radio className="practice__body" value={2}> {item.answers[1]}</Radio>
                    <Radio className="practice__body" value={3}>{item.answers[2]}</Radio>
                    </Space>
                    </Radio.Group>
                </div>
            )) }
                <Button className="practice__btn">Nộp bài</Button>
          
            </div>                 
        </>
    )
}
export default Practice;