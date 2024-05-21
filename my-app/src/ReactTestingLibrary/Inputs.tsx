import React from 'react'

const Inputs = () => {
  return (
    <div>
        <h1>heading one</h1>
        {/* <h1>heading one test</h1> */}

        <h2>heading two</h2>

        <div>
          <label htmlFor='textName'>textName</label>
          <input name="textName" id="textName" type='text'></input>
        </div>
        <div>
          <label htmlFor='textArea'>TextArea </label>
          <textarea name="textArea" ></textarea>
        </div>
      <select>
        <option>first Name</option>
        <option>last Name</option>
      </select>
      <input type="checkbox" />
      <input type='radio'></input>
      {/* <div>
      <label htmlFor='textAreasName'>textAreasName</label>
      <textarea name="textAreasName"></textarea>
      </div> */}
    </div>
  )
}

export default Inputs
