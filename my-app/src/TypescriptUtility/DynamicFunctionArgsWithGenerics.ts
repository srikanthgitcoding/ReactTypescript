export type Event =
   {
            type:"LOG_IN",
            payload: {
                userId:string
            };
        }
    |   {
        type:"SIGN_OUT";
        }
// //when u want few arguments optional in some cases and non optional in some other cases 
// const sendEvent =(eventType:Event["type"],payload?:any)=>{}




// const sendEvent1 =()=>{}

// // <Type extends Event["type"]> // log_in or sign_out
// const sendEvent2 = <Type extends Event["type"]>(
//     ...args: Extract<Event,{type:Type}> extends {payload: infer TPayload} 
//     ? [type: Type, payload: TPayload] 
//     : [type: Type]
// )=>{}

// sendEvent2("SIGN_OUT")
// sendEvent2("LOG_IN",{userId:""})



// //     // correct
// // sendEvent("LOG_IN",{userId:""})
// // sendEvent("LOG_IN")

// // // theow error
// // sendEvent("SIGN_OUT",)
// // sendEvent("LOG_IN",{
// //     userId:123
// // })

// say when u have a scenario where payload is optional for sign out and not for login
// one way to deal with is using option payload but in this case what happens is even in lofin u can skip payload

// what if u want to skip payload only for signnout but mandatory for login
// we can acheive this using dynamic function arguments
export type LogInSignOut = 
    | {
        type:"LOGIN",
        payload: {
            userID:string
        }
    }
    | {
        type:"SIGNOUT"
        }

const sendDeatils =(type:LogInSignOut["type"],payload? :any)=>{

}     
type keyssof = keyof LogInSignOut  


const sendDeatilsModified =<Type extends LogInSignOut["type"]>(...args:
Extract<LogInSignOut,{type:Type}> extends {payload :infer TPayload} ? [Type,TPayload] : [Type])=>{

} 

type extractType<T extends LogInSignOut["type"]> = Extract<LogInSignOut,{type:T}> extends {payload: infer Tpayload} ? [{type:T,payload:Tpayload}] : [{type:T}]

const P1=<Type extends LogInSignOut["type"]>(...args:Extract<LogInSignOut,{type:Type}> extends {payload : infer Tpayload} ? [{type:Type, payload:Tpayload}] : [{type:Type}]):void=>{

}

const p2 = <Type extends LogInSignOut["type"]>(...args:Extract<LogInSignOut,{type:Type}> extends {payload:infer TPayload} ? [{type:Type,payload:TPayload}] : [{type:Type}]):void=>{

}  
P1<"LOGIN">({type:"LOGIN",payload:{userID:"1"}})
P1<"SIGNOUT">({type:"SIGNOUT"})
p2({type:"LOGIN",payload:{userID:""}})

//sendDeatilsModified method takes a genric here we r saying it accepts either login or sign out 

sendDeatilsModified<"LOGIN">("LOGIN",{userID:""})
sendDeatilsModified("SIGNOUT")


sendDeatils("LOGIN",{userID:""})
sendDeatils("SIGNOUT","")


const p3 = <T extends Event["type"]>(...args:Extract<Event, {type:T}> extends {payload:infer R } ? [{type:T,payload:R}] : [{type:T}])=>{}


