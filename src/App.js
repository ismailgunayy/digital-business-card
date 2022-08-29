import "./App.css"
import Portrait from "./components/Portrait"
import Info from "./components/Info"
import TextArea from "./components/TextArea"
import Footer from "./components/Footer"
import portrait from "./images/portrait.jpeg"


function App() {
  return (
    <div className="container">
      <Portrait portrait={portrait}/>
      <Info name={person.name} title={person.title} email={person.email}/>
      <TextArea text={person.about} />
      <TextArea text={person.interests} />
      <Footer linkedInURL={person.linkedInURL} gitHubURL={person.githubURL}/>
    </div>
  )
}

const person = {
  name: "İsmail Günay",
  title: "Junior Frontend Developer",
  email: "ismailggunay@gmail.com",
  linkedInURL: "https://linkedin.com/in/ismailgunayy/",
  githubURL: "https://github.com/ismailgunayy",
  about: {
    header: "About",
    content:
      "I am a student who improves himself in frontend development. I try to keep up with the best practices, and always look for new things to learn.",
  },
  interests: {
    header: "Interests",
    content:
      "Singer. Guitar player. Coffee maniac. Puzzle solver. Amateur camper. F1 fan.",
  },
}

export default App
