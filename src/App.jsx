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
            <div className="code-by"><div className="txt-wrap"><span>Code by Kim</span><span>Sunhyeong</span></div></div>
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
        <div className="produce-wrap">
            <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>arrow-up-right</title>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Artboard" transform="translate(-1019.000000, -279.000000)" stroke="#111111" strokeWidth="1.5">
                      <g id="arrow-up-right" transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                          <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                          <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                      </g>
                  </g>
              </g>
            </svg>
            <p>UX<br/>PUBLISHER</p>
        </div>
      </section>
      <section className="work-sec" style={{height: '100vh'}}>
        <div className="section-inner">
          <h2 className="sr-only">Work</h2>
          <p className="intro">아스팔트 속 피어난 꽃처럼 어떤 환경에서든 적응하며 가치를 만들어내는,<br/>3년 경험의 웹퍼블리셔입니다. 항상 사용자 경험과 웹 표준을 최우선으로 지향합니다.</p>
          <div className="search-box-wrap">
            <div className="search-box magnetic">
              <input type="text" placeholder="Search works..." />
            </div>
          </div>
          <div className="work-list">
            <div className="work-item">
              <div className="work-item-inner">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
