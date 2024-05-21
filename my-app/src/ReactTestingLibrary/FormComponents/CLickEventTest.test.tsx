import { fireEvent, render,screen } from "@testing-library/react";
import ClickEventTest from "./ClickEventTest";
import Footer from "./Footer";

describe("form click event",()=>{
    it("click event handler",()=>{
        render(<ClickEventTest></ClickEventTest>)
        const inputElement = screen.getByPlaceholderText(/Add items here/i)
        expect(inputElement).toBeInTheDocument()        
    })
    // it("onchange input value",()=>{
    //     render(<ClickEventTest></ClickEventTest>)
    //     const inputElement = screen.getByPlaceholderText(/Add items here/i)
    //     fireEvent.change(inputElement,{target:{value:"changed value"}})
    //     expect(inputElement.value).toBe("changed value")        
    // })

    // it("onclick add button the value of inputs gets null",()=>{
    //     render(<ClickEventTest></ClickEventTest>)
    //     const buttonElement = screen.getByRole("button")
    //     const inputElement = screen.getByPlaceholderText(/Add items here/i)
    //     fireEvent.change(inputElement,{target:{value:"changed value"}})
    //     fireEvent.click(buttonElement)
    //     expect(inputElement.value).toBe("")        
    // })
})

describe(("integration testing which means 2 components interaction"),()=>{
    test(("integration test"),()=>{
        render(<ClickEventTest></ClickEventTest>)
        const inputElement = screen.getByPlaceholderText(/Add items here/i)
        expect(inputElement).toBeInTheDocument()

        const buttonElement = screen.getByRole("button",{name:/Add/i})
        expect(buttonElement).toBeInTheDocument()

        const Footer = screen.getByRole("div")


        fireEvent.change(inputElement,{target:{value:"something changed here"}})
        fireEvent.click(buttonElement)
        expect(Footer).toContain("something changed here")
    })
})
