import './assets/common.css';
import './assets/index.css';
import { useState, useEffect } from 'react';
import { initializeScript } from './assets/index';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    initializeScript();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const aside = document.querySelector('.aside');
      const btnNavi = document.querySelector('.btn-navi');
      
      if (isOpen && aside && !aside.contains(event.target) && !btnNavi.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className={isOpen ? 'open' : ''}>
        <div className="top-bar">
          <h1 className="magnetic" data-strength="10" data-strength-text="5">
            <div className="credit">@</div>
            <div className="code-by"><div className="txt-wrap"><span>Kim Sunhyeong</span><span>Code by</span></div></div>
          </h1>
          <ul>
            <li><a href="/" className="magnetic" data-strength="30" data-strength-text="15">Home</a></li>
            <li><a href="#" className="magnetic" data-strength="30" data-strength-text="15">Work</a></li>
            <li><a href="#" className="magnetic" data-strength="30" data-strength-text="15">About</a></li>
            <li><a href="#" className="magnetic" data-strength="30" data-strength-text="15">Contact</a></li>
          </ul>
        </div>
        <div className="btn-navi" onClick={toggleNavigation}>
          <div className="btn-click magnetic" data-strength="50" data-strength-text="25">
            <div className="btn-bars btn-text"></div>
            <span className="sr-only">navigation</span>
            <span className="sr-only">close</span>
          </div>
        </div>
        <div className="aside">
          <div className="aside-inner">
            <div className="aside-top">
              <p className="sr-only">NAVIGATION</p>
              <ul>
                <li><a href="/" className="magnetic" data-strength="30" data-strength-text="15">Home</a></li>
                <li><a href="#" className="magnetic" data-strength="30" data-strength-text="15">Work</a></li>
                <li><a href="#" className="magnetic" data-strength="30" data-strength-text="15">About</a></li>
                <li><a href="#" className="magnetic" data-strength="30" data-strength-text="15">Contact</a></li>
              </ul>
            </div>
            <div className="aside-btm">
              <p>SOCIALS</p>
              <ul>
                <li>Instagram</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="main-sec">
        <h2 className="sr-only">Main</h2>
        <div className="name-flow">
          <div className="name-flow-inner">
            <div className="name-flow">
              <div className="name-wrap">
                <div className="name">Kim Sun ☀ hyeong</div>
                <div className="name">Kim Sun ☀ hyeong</div>
                <div className="name">Kim Sun ☀ hyeong</div>
                <div className="name">Kim Sun ☀ hyeong</div>
              </div>
            </div>
          </div>
        </div>
        <div className="character"></div>
      </section>
      <section className="work-sec" style={{height: '100vh'}}>
        <div className="section-inner">
          <h2 className="sr-only">Work</h2>
        </div>
      </section>
    </>
  )
}

export default App
