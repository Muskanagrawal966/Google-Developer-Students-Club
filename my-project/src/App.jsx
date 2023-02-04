import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import { marked } from 'marked'
import Markdown from './components/Markdown'
import Preview from './components/Preview'

function App() {
  const [markdown, setMarkdown] = useState('');
  const handleChange = (mdValue) => {
    setMarkdown(marked(mdValue));
  }

  return (
    <div className="App bg-gray-600">
      <NavBar/>
      <div className='flex'>
      <Markdown handleChange = {handleChange}/>
      <Preview markdown = {markdown}/>
      </div>
    </div>
  )
}

export default App