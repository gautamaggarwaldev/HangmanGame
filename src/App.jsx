import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'

function App() {

  return (

   <div>
    <TextInputFormContainer />
   </div>


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