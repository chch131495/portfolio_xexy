document.addEventListener('DOMContentLoaded', ()=>{
    const banner  = document.querySelector('.top_banner');
    const closeBtn = document.querySelector('.top_btn');
    if(closeBtn){
        closeBtn.addEventListener('click',()=>{
            //창 닫힘
            banner.style.display = 'none';
        })
    }
} )