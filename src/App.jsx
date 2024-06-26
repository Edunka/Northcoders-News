import './Styling/App.css'
import Header from './components/Header'
import {Routes, Route} from "react-router-dom"
import {Articles} from './components/Articles'
import '../src/Styling/index.css'
import {SingleArticle} from './components/SingleArticle'
import {Topics} from './components/Topics'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact component={<Header/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_Id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />}></Route>
      </Routes>
    </>
  )
}

export default App
