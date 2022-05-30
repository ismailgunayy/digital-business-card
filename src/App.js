import './App.css';
import Info from "./components/Info"
import TextArea from './components/TextArea'
import Footer from "./components/Footer"

function App() {
  return (
    <div className='container'>
      <Info />
      <TextArea />
      <TextArea />
      <Footer />
    </div>
  )
}

export default App;
