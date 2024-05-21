import { z,ZodType } from "zod";

interface Iprops{
    fName:string
}
const schema:ZodType<Iprops> =z.object({
    fName:z.string()
})

