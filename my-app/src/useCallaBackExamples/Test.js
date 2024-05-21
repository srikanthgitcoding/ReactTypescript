const value = 1
const usememorize =(callback,number)=>{
    const cache = {}
    if(cache[
        
    ]){
        return cache[number]
    }else{
        const result = number * 10
        callback(number)
    }
  }


const mee = usememorize((number)=>{

},value)

mee()
