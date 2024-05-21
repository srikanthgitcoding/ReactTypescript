import { act, render,screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from '@testing-library/user-event'

describe('', () => {
    it(("render corrrectly check"),()=>{
        render(<Counter></Counter>)
        const headingElement = screen.getByRole("heading",{level:1})
        expect(headingElement).toBeInTheDocument()

        const btnElement = screen.getByRole("button",{name:/increment/i})
        expect(btnElement).toBeInTheDocument()
    })

    it(("inital render"),()=>{
        render(<Counter></Counter>)
        const headingElement = screen.getByRole("heading",{level:1})
        expect(headingElement).toHaveTextContent("0")

        const btnElement = screen.getByRole("button",{name:/increment/i})
        expect(btnElement).toBeInTheDocument()



    })

    it(("render count 1 "), ()=>{

        render(<Counter></Counter>)
        const btnElement = screen.getByRole("button",{name:/increment/i})
        act(()=>{
            userEvent.click(btnElement)
        })
        const headingElement = screen.getByRole("heading",{level:1})

        expect(headingElement).toHaveTextContent("1")

        act( ()=>{
              userEvent.click(btnElement)
        })
        act(()=>{
             userEvent.click(btnElement)
        })
        const headingElement2 = screen.getByRole("heading",{level:1})

        expect(headingElement2).toHaveTextContent("3")



    })
})
