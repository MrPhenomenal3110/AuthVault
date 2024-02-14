import { useState } from 'react';
import Signup from './Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
      <Signup/>
    </div>
  )
}

export default App;
