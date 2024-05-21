import fetch from "node-fetch"

const fetchFunction=async (url)=>{
    return fetch(url).then(res=>res.json())
}


const waterFall = async ()=>{
    //if 2nd api call depend on first then do this
    const data1 = await fetchFunction("https://jsonplaceholder.typicode.com/todos/1")
    const id = data1.userId + 1
    const data2 = await fetchFunction(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(data2)

}

//waterFall()



const parallel =async()=>{
    const data1 =  fetchFunction("https://jsonplaceholder.typicode.com/todos/1")
    const data2 =  fetchFunction("https://jsonplaceholder.typicode.com/todos/2")
    const [data11,data22] =await Promise.all([data1,data2])
    console.log(data22)
}

parallel()
//when 2 apis are not depnding on each other 