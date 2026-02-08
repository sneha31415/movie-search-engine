import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <Text toDisplay={"hello sneha"}/>
      <Text toDisplay={"whatsup"}> </Text>
    </>
  )
}


// components in react
function Text({toDisplay}) {
  return (
     <div>
    <p>{toDisplay}</p>
  </div>
  )
 
}
export default App
