import React from 'react'
import CustomInput from '../../components/input/input'

const InputPage = () => {
  return (
    <div>
      <h1>Inputs</h1>
      <div className="buttons">
        <div>
            <p>&#60;Input &#47;&#62;</p>
            <CustomInput />
        </div>
        <div>
            <p>&#60;Input error &#47;&#62;</p>
            <CustomInput error />
        </div>
        <div>
            <p>&#60;Input disable &#47;&#62;</p>
            <CustomInput disable />
        </div>
        <div className="flex-input">
          <div>
              <p>&#60;Input helperText="Some interesting text" &#47;&#62;</p>
              <CustomInput helperText="Some interesting text" />
          </div>
          <div>
              <p>&#60;Input helperText="Some interesting text" error &#47;&#62;</p>
              <CustomInput helperText="Some interesting text" error />
          </div>
        </div>
        <div className="flex-input">
          <div>
              <p>&#60;Input startIcon &#47;&#62;</p>
              <CustomInput startIcon />
          </div>
          <div>
              <p>&#60;Input endIcon &#47;&#62;</p>
              <CustomInput endIcon />
          </div>
        </div>
        <div>
            <p>&#60;Input &#47;&#62;</p>
            <CustomInput value="Text" />
        </div>
        <div className="flex-input">
          <div>
              <p>&#60;Input size="sm" &#47;&#62;</p>
              <CustomInput size="sm" />
          </div>
          <div>
              <p>&#60;Input size="md" &#47;&#62;</p>
              <CustomInput size="md" />
          </div>
        </div>
        <div>
            <p>&#60;Input fullwidth &#47;&#62;</p>
            <CustomInput fullwidth />
        </div>
        <div>
            <p>&#60;Input multiline row="4" &#47;&#62;</p>
            <CustomInput multiline row="4" />
        </div>
      </div>
    </div>
  )
}

export default InputPage
