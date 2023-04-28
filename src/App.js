const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>New Chat</button>
        <div className="history"></div>
        <nav>
          <p>Made by <a href="https://github.com/MajdQumseya">@Twig</a> </p>
        </nav>
        
      </section>

      <section className="main">
        <h1>TwiGPT</h1>
        <p className="output"></p>
        <input />
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
