import React from 'react'
import Button from './components/Button'
const App = () => {
  return (
  <div className='flex flex-col '>
<Button>Primary Button</Button>
<Button variant="secondary" size="large">Secondary Large Button</Button>
<Button disabled>Disabled Button</Button>
<Button className="border-2 border-black">Custom Styled Button</Button>
</div>


  )
}

export default App