import { useState } from 'react'
import heroImg from './assets/hero.png'
import Chatbot from './Chatbot'
import './App.css'

function App() {
  const [view, setView] = useState('home')
  const [iframeUrl, setIframeUrl] = useState('')

  const openIframe = (url) => {
    setIframeUrl(url)
    setView('iframe')
  }

  // 🟡 HOME PAGE
if (view === 'home') {
  return (
    <div className="home-container">

      {/* 🔝 TOP BAR WITH DASHBOARD BUTTONS */}
      <div className="top-nav">
        <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 1</button>
        <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 2</button>
        <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 3</button>
        <button onClick={() => openIframe('https://www.google.com')} className="nav-btn">Dashboard 4</button>
      </div>

      {/* 🏠 CENTER CONTENT */}
      <div className="home-center">
        <img src={heroImg} alt="logo" className="logo" />

        <button
          onClick={() => setView('chat')}
          className="main-btn"
        >
          HWAI Chatbot
        </button>
      </div>

    </div>
  )
}
  // 🟢 IFRAME PAGE
  if (view === 'iframe') {
    return (
      <div className="h-screen flex flex-col">

        <div className="p-3 bg-black text-white flex justify-between">
          <span>Dashboard View</span>
          <button onClick={() => setView('home')}>Back</button>
        </div>

        <iframe
          src={iframeUrl}
          title="dashboard"
          className="flex-1 w-full"
        />
      </div>
    )
  }

  // 🔵 CHATBOT PAGE
  return (
    <Chatbot
      goHome={() => setView('home')}
      openIframe={openIframe}
    />
  )
}

export default App