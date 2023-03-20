import React from 'react'
import './index.css'

import { SplitChars } from 'react-split-chars'
const App = () => {
  return <SplitChars wrapper={<span className='text'></span>}>
    This component can wrap a string into individual character tags.
  </SplitChars>
}

export default App
