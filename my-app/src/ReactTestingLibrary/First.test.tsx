import { render,screen } from "@testing-library/react"
import First from './First'
import axios from "axios"

describe("group",()=>{
axios

test("string check",()=>{
 render(<First/>)
 const name = screen.getByText("Srikanth")  
 expect(name).toBeInTheDocument() 
})

test("props check",()=>{
    render(<First name="sriakth"/>)
    const name = screen.getByText("Srikanth")  
    expect(name).toBeInTheDocument() 
   })

   describe(("lastName nested"),()=>{
    test("props 3",()=>{
        render(<First lastName="sriakth"/>)
        const name = screen.getByText("Srikanth")  
        expect(name).toBeInTheDocument() 
       })
   })
  
})

describe(("outside multiple describe"),()=>{
    test("props 3",()=>{
        render(<First lastName="sriakth"/>)
        const name = screen.getByText("Srikanth")  
        expect(name).toBeInTheDocument() 
       })
   })