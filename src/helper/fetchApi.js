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