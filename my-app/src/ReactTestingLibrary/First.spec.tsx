import { render,screen } from "@testing-library/react"
import First from "./First"

describe("parent",()=>{
    test("test1",()=>{
        render(<First/>)
        const name = screen.getByText("Srikanth")
        expect(name).toBeInTheDocument()
    })
})

describe("parent2",()=>{
    test.skip("test2",()=>{
        render(<First/>)
        const name = screen.getByText("Srikanth")
        expect(name).toBeInTheDocument()
    })
})
