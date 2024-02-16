import { useState } from 'react';
import Signup from './Signup';
import AuthProvider from '../context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <div className='w-full h-screen'>
        <Signup/>
      </div>
    </AuthProvider>
  )
}

export default App;
