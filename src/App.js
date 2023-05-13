import { useState, useEffect } from "react";



const App = () => {

  const [message, setMessage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [previousChat, setPreviousChat] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null);




  const getMessages = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: prompt
        })
      };
      let fetchResponse = await fetch('http://localhost:8000/completions', options)
      let data = await fetchResponse.json();
      console.log(data)
      setMessage(data.choices[0].message.content)
     
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (e) => {
    setPrompt(e.target.value)
  }

  useEffect(() => {
    console.log(currentTitle, prompt, message)
    if(!currentTitle && prompt && message){
      setCurrentTitle(prompt)
    }
    if(currentTitle && prompt && message) {
      setPreviousChat(prevChats => (
        [...prevChats, {
          title: currentTitle, 
          role: "user",
          content: prompt
        }, {
           title: currentTitle,
            role: message.role,
            content: message.content
        }]
      ))
    }
  }, [message, currentTitle])
  

  return (

    
    <div className="app">
      <section className="side-bar">
        <button>New Chat</button>
        <div className="history">
          <ul>
            <li>BLUEGH</li>
          </ul>
        </div>
        <nav>
          <p>
            Made by <a href="https://github.com/MajdQumseya">@Twig</a>
          </p>
        </nav>
      </section>

      <section className="main">
       {!currentTitle &&  <h1>TwiGPT</h1> }
        <ul className="feed">
          {message}
        </ul>
        <div className="bottom-container">
          <div className="input-container">
            <input type="text" value={prompt} onChange={(e) => handleInputChange(e)}/>
            <div onClick={getMessages} className="submit">➢</div>
          </div>
        </div>
        <p className="info">
          Chat GPT April 27 Version. Free Research Preview. Our goal is to make
          AI systems more natural and safe to interact with. Your feedback will
          help us improve.
        </p>
      </section>
    </div>
  );
};

export default App;
