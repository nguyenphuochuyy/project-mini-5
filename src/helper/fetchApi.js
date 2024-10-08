export const login = async (email, password)=>{
    const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`) 
    const result = await res.json();
    return result;
}
export const getTopic = async ()=>{
    const res = await fetch("http://localhost:3000/topics")
    const result = await res.json();
    return result;
}
export const getTopicByName = async (name) =>{
    const res = await fetch(`http://localhost:3000/topics?name=${name}`)
    const result = await res.json();
    return result;
}
export const getTopicById = async (topicId) =>{
    const res = await fetch(`http://localhost:3000/topics?id=${topicId}`)
    const result = await res.json();
    return result;
}
export const getQuestion = async (topic)=>{
    const res = await fetch(`http://localhost:3000/questions?name=${topic}`);
    const result = await res.json();
    return result;
}
export const getQuestionById = async (id)=>{
    const res = await fetch(`http://localhost:3000/questions?id=${id}`);
    const result = await res.json();
    return result;
}
export const postAnswer = async (option)=>{
    const res = await fetch("http://localhost:3000/answers",{
        method : 'POST',
        headers :{
             'Content-Type': 'application/json'
        },
        body : JSON.stringify(option),
    });
    const result = await res.json();
    return result;
}
export const getAnswerById = async (id)=>{
    const res = await fetch(`http://localhost:3000/answers?id=${id}`)
    const result = await res.json()
    return result;
}
export const getAnswerByUId = async (uId) =>{
    const res  = await fetch(`http://localhost:3000/answers?userId=${uId}`)
    const result = await res.json()
    return result;
}