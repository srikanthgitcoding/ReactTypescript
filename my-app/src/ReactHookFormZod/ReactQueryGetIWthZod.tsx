import axios from 'axios'
import { UseQueryResult, useQuery } from 'react-query'
import {z}  from 'zod'

const ReactQueryGetIWthZod = () => {
    
    let schema = z.object({
        title:z.string()
    })
    type typeSchema = z.infer<typeof schema>
    type test1 = z.input<typeof schema>
    const {data} = useQuery({
        queryKey:"getData",
        queryFn:async ()=> {
            const data1 = await axios.get("http://localhost:4444/posts")
            //console.log(data2);
            return data1
        }
    })
    console.log("data lets see", data)
  return (
    <div>
      
    </div>
  )
}

export default ReactQueryGetIWthZod
