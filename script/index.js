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

//좋아요 버튼 클릭 시 
const wishBtn = document.querySelectorAll('.wish_btn')
//console.log(wishBtn); 확인
wishBtn.forEach(button => {
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        //클릭할때 active
        button.classList.toggle('wish_btn-active');
        console.log('wish button toggled', button.classList.contains('wish_btn-active'))
    })
})

//4행 큰 이미지 상품 슬라이드
const mainSwiper = new Swiper('#main', {
    //무한 루프
    loop:true,
    //한번에 보여줄 슬라이드 수
    slidesPerView:2,
    //슬라이드 사이의 간격
    spaceBetween: 30,
    //슬라이드 전환 속도
    speed:1000,
    //자동 재생
    autoplay:{
        delay:2000,
        pauseOnMouseEnter:true,
    }
})


//4행 작은 이미지 상품 슬라이드
const smallListSwiper = new Swiper('#small_list',{
    //한 번에 보여줄 슬라이드 개수
    slidesPerView:3,
    //슬라이드 사이의 간격
    spaceBetween:10,
    
    navigation: { 
        nextEl: '.swiper-button-next.small-next', 
        prevEl: '.swiper-button-prev.small-prev' 
    },
})

//카테고리 클릭시 변경
//카테고리 여성, 남성 버튼
const btnW = document.querySelector('.btn_tag .wom')
const btnM = document.querySelector('.btn_tag .man')
//카테고리 스포츠 여성, 남성
const sportW = document.querySelector('.set .sport_w')
const sportM = document.querySelector('.set .sport_m')
console.log(btnW, btnM, sportW, sportM) //콘솔확인

//카테고리 여성 버튼 클릭시
btnW.addEventListener('click',(e)=>{
    //a태그 기본 동작 방지
    e.preventDefault();
    //여성 버튼 클릭시 활성화
    btnW.classList.add('wom-active');
    //여성 버튼 클릭시 남성버튼 숨김
    btnM.classList.remove('man-active')
    //여성 카테고리 보이기
    sportW.style.display = 'flex';
    //남성 카테고리 숨기기
    sportM.style.display = 'none'
})
//카테고리 남성 버튼 클릭시
btnM.addEventListener('click',(e)=>{
    //a태그 기본 동작 방지
    e.preventDefault();
    //남성 버튼 클릭시 활성화
    btnM.classList.add('man-active');
    //남성 버튼 클릭시 여성버튼 숨김
    btnW.classList.remove('wom-active')
    //남성 카테고리 보이기
    sportM.style.display = 'flex';
    //여성 카테고리 숨기기
    sportW.style.display = 'none';
})

//인스타그램 슬라이드
const ig = new Swiper('#ig', {
    //슬라이드 간격
    spaceBetween: 30,
    //슬라이드 너비 지정
    slidesPerView: 'auto',
    //자동 재생
    autoplay:{
        delay:2500,
        //마우스 올리면 자동재생 멈춤
        pauseOnMouseEnter:true,
    },
    pagination:{
        el:'.swiper-pagination',
        type: 'progressbar'
    }
})

//광고배너 (끝부분)
const adBnrSwiper = new Swiper('#smallbnr',{
    //무한루프
    loop:true,

    //한번에 보여줄 슬라이드 수
    slidesPerView:2,

    //슬라이드간격
    slidesBetween:0,

    //슬라이드 전환 속도
    speed:1000,

    //자동 재생
    autoplay:{
        delay:2000,
        pauseOnMouseEnter:true,
    }
}) 