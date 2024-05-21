import { screen, render } from "@testing-library/react"
import Inputs from "./Inputs"

describe("component",()=>{
    // render(<Inputs></Inputs>)

    // test("inputs textbox example",()=>{
    //     render(<Inputs></Inputs>)
    //     const textbox1= screen.getByRole("textbox")
    //     expect(textbox1).toBeInTheDocument()
    // })
    // test("dropdwon test",()=>{
    //     render(<Inputs></Inputs>)
    //     const dropdwon = screen.getByRole("combobox")
    //     expect(dropdwon).toBeInTheDocument()
    // })

    // test("textName test",()=>{
    //     const textValue = screen.getByLabelText("textName",{
    //         selector:'input'
    //     })
    //     expect(textValue).toBeInTheDocument();
    // })
    // test("textarea test",()=>{
    //     render(<Inputs></Inputs>)
    //     const dropdwon = scareen.getByRole("textbox",{name:"textAreasName"})
    //     expect(dropdwon).toBeInTheDocument()
    // })
    // test("checkbox",()=>{
    //     render(<Inputs></Inputs>)
    //     const checkbox = screen.getByRole("checkbox")
    //     expect(checkbox).toBeInTheDocument()
    // })
    // test("radio",()=>{
    //     render(<Inputs></Inputs>)
    //     const radio = screen.getByRole("radio")
    //     expect(radio).toBeInTheDocument()
    // })
    //way 1
    // test("headings",()=>{
    //     render(<Inputs></Inputs>)
    //     const headone = screen.getByRole("heading",{name:"heading one"})
    //     expect(headone).toBeInTheDocument()
    //     const headtwo = screen.getByRole("heading",{name:"heading two"})
    //     expect(headtwo).toBeInTheDocument()
        
    // })

       it("headings",()=>{
        render(<Inputs></Inputs>)
        const headone = screen.getByRole("heading",{level:1})
        expect(headone).toBeInTheDocument()
        // const headtest = screen.getByRole("heading",{name:"heading one test"})
        // expect(headtest).toBeInTheDocument()
        const headtwo = screen.getByRole("heading",{level:2})
        expect(headtwo).toBeInTheDocument()
        
    })
    
 
    
})
