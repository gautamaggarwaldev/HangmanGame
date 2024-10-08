import { Routes, Route } from 'react-router-dom'
import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
    <Routes>
    <Route path='/start' element={<StartGame />} />
    <Route path='/play' element={<PlayGame />} />
    <Route path='/' element={<div>Home</div>} />
    </Routes>
  )
}

export default App






{/* <Button text="click me" styleType='primary' onClickHandler={() => console.log("click me")} />
<Button text="sign in" styleType='error' onClickHandler={() => console.log("sign in")} />
<Button text="sign up" styleType='warning' onClickHandler={() => console.log("sign up")}/>

<TextInput 
  label={"Enter some text"}
  placeholder={"enter some text here"}
  onChangeHandler={(e)=> console.log(e.target.value)}
/> */}