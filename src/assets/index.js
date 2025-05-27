export function initializeScript() {
    function initMagnetic() {
        const magnets = document.querySelectorAll('.magnetic');
        const strength = 100;
        
        // 화면 너비가 540px보다 클 때만 마그네틱 효과 적용
        if (window.innerWidth > 540) {
            magnets.forEach(magnet => {
                magnet.addEventListener('mousemove', moveMagnet);
                
                // 마우스 진입 시 transition 설정
                magnet.addEventListener('mouseenter', function(event) {
                    const target = event.currentTarget;
                    const btnText = target.querySelector('.btn-text');
                    
                    target.style.transition = 'transform 0.2s ease-out';
                    if (btnText) {
                        btnText.style.transition = 'transform 0.2s ease-out';
                    }
                });
                
                magnet.addEventListener('mouseleave', function(event) {
                    const target = event.currentTarget;
                    const btnText = target.querySelector('.btn-text');
                    
                    // CSS transition을 사용하여 애니메이션 적용
                    target.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

                    target.style.transform = 'translate(0, 0)';
                    
                    if (btnText) {
                        btnText.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                        btnText.style.transform = 'translate(0, 0)';
                    }
                });
            });
        }

        function moveMagnet(event) {
            const magnetButton = event.currentTarget;
            const bounding = magnetButton.getBoundingClientRect();
            const magnetsStrength = magnetButton.getAttribute("data-strength") || strength;
            const magnetsStrengthText = magnetButton.getAttribute("data-strength-text") || strength;
            const btnText = magnetButton.querySelector('.btn-text');
            
            // 마우스 위치에 따른 변위 계산
            const x = ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * magnetsStrength;
            const y = ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * magnetsStrength;
            
            // transition을 유지하면서 transform 적용
            magnetButton.style.transform = `translate(${x}px, ${y}px)`;
            
            if (btnText) {
                btnText.style.transform = `translate(${x}px, ${y}px)`;
            }
        }
    }

    function initNameFlow() {
        const nameWrap = document.querySelector('.name-wrap');
        let position = 0;
        let animationFrame;
        let direction = -1; // 기본 방향은 왼쪽(-1)
        const speed = 3;

        // 마지막 스크롤 방향에 따라 direction 설정
        document.addEventListener('wheel', (e) => {
            direction = e.deltaY > 0 ? -1 : 1;
        });

        // 애니메이션 함수
        function animate() {
            position += speed * direction;
            
            // name-wrap의 위치 업데이트
            nameWrap.style.left = `${position}px`;
            
            // 화면 밖으로 나가면 처음으로 리셋
            const wrapWidth = nameWrap.offsetWidth / 4;
            if (Math.abs(position) >= wrapWidth) {
                position = 0;
                nameWrap.style.left = `0px`;
            }
            
            animationFrame = requestAnimationFrame(animate);
        }

        // 애니메이션 시작
        animate();

        // 컴포넌트 언마운트 시 애니메이션 정리
        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }

    window.addEventListener('scroll', function(){
        const topBarHt = document.querySelector('.top-bar').offsetHeight;
        if(window.scrollY > topBarHt){
            document.querySelector('header').classList.add('scroll');
        }else{
            document.querySelector('header').classList.remove('scroll');
        }
    });
    // 초기화 함수 실행
    initMagnetic();
    initNameFlow();
}