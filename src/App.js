import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
const [gitHubName, setGitHubName] = useState('')                     
const [gitHubURL, setGitHubURL] = useState('')

useEffect(() => {
    fetch('https://api.github.com/users/jeffdonkey')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubURL(data.html_url)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <a href={gitHubURL}><button>Link to Github profile</button></a>

    </div>
);
}

export default App
    
