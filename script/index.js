document.addEventListener('DOMContentLoaded', ()=>{
    const banner  = document.querySelector('.top_banner');
    const closeBtn = document.querySelector('.top_btn');
    const header = document.querySelector('#wrap header');
    if(closeBtn,header){
        closeBtn.addEventListener('click',(e)=>{
            e.preventDefault(); //버튼의 기본 동작 방지
            //창 닫힘
            banner.style.display = 'none';
            //헤더를 상단으로 올림
            header.style.top = '0px';
        })
    }
})

//헤더 스크롤 내리면 불투명
const header = document.querySelector('#wrap header');
const scrollThreshold = 50; //스크롤이 50px 내려갔을때
window.addEventListener('scroll', () => {
        if(window.scrollY > scrollThreshold){
            header.classList.add('scrollde');
        } else {
            header.classList.remove('scrollde');
        }
    });

//1행 슬라이드
const bgSwiper = new Swiper('.swiper.main_slider',{
    //자동 재생
    autoplay:{
        delay:2500,
        // 클릭, 스와이프 시에도 자동재생 유지
        disableOnInteraction: false,
        // 마우스 올리면 자동재생 멈춤
        pauseOnMouseEnter: true,
    },
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        type:'bullets'
    },
    navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev' 
        },
})