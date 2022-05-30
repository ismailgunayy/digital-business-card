import "./App.css"
import Info from "./components/Info"
import TextArea from "./components/TextArea"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Info name="İsmail Günay" title="Junior Frontend Developer" />
      <TextArea text={person.about} />
      <TextArea text={person.interests} />
      <Footer linkedInURL={person.linkedInURL} gitHubURL={person.githubURL}/>
    </div>
  )
}

const person = {
  linkedInURL: "https://linkedin.com/in/ismailgunayy/",
  githubURL: "https://github.com/ismailgunayy",
  about: {
    header: "About",
    content:
      "I am a student who improves himself in frontend development. I try to keep up with the best practices, and am always looking for new things to learn.",
  },
  interests: {
    header: "Interests",
    content:
      "Singer. Guitar player. Coffee maniac. Puzzle solver. Amateur camper. F1 fan.",
  },
}

export default App
