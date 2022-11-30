function SayHello(props){
console.log(props);
  return <div style={{color: props.color}}>
    Hello {props.name}
  </div>
}

function App() {
  return(<div>
  <div>Hello </div>
 <SayHello name='David' color='blue'/>
  <p>to react</p>
  </div>
  ) 

}

export default App;
