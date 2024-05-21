interface Car{
    type:"car",
    groundSpeed:number
}

interface Plane {
    type:"plane",
    airSpeed:number
}


type vehcle = Car | Plane

const Car:vehcle ={
    type:"car",
    groundSpeed:1
}
const plane:vehcle ={
    type:"plane",
    airSpeed:1
}
export {}