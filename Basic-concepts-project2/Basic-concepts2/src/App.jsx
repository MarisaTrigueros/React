import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
    <Hello />
    <Hello />
    <Message/>
    <Welcome name="People" age={5}/>
    </>
  )
}

export default App
