import './assets/index.css';

function App() {

  return (
    <>
      <header>
        <div className="top-bar">
          <h1>
            <div className="credit">@</div>
            <div className="code-by"><span>Code by</span><span>Kim Sunhyeong</span></div>
          </h1>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="btn-navi">
          <div className="btn-click">
            <div className="btn-bars"></div>
            <span className="sr-only">navigation</span>
            <span className="sr-only">close</span>
          </div>
        </div>
        <div className="aside">
          <div className="aside-inner">
            <p>Navigation</p>
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </header>
      
    </>
  )
}

export default App
