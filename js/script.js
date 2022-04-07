$( document ).ready(function() {
    const swiperEvt = function() {
       const sw = new Swiper(".swiper", {
            slidesPerView: 'auto',
        });
    } 
    
    swiperEvt()

    const cateType = [
        'camping', 'pet', 'dance'
    ]

    

    const cateDesc = [
        [
            {
                dotcom: 3,
                week: 2,
                omni: 22,
                href: 'https://github.com/mylove2918/terry',
                blind: '아빠랑 여행갈래?'
            },
            {
                week: 2,
                omni: 23,
                href: 'https://github.com/mylove2918/terry',                
                blind: '여행 후에 남겨진 것들'
            },
            {
                week: 2,
                omni: 24,
                href: 'https://github.com/mylove2918/terry',
                blind: '어제는 운동장, 오늘은 캠핑장'
            },
            {
                week: 1,
                omni: 25,
                href: 'https://github.com/mylove2918/terry',                
                blind: '작은거인'
            },
            {
                week: 1,
                omni: 26,
                href: 'https://github.com/mylove2918/terry',                
                blind: '텐트로 찾아온 보름달'
            },
            {
                week: 1,
                omni: 26,
                href: 'https://github.com/mylove2918/terry',                
                blind: '텐트로 찾아온 보름달'
            },
            {
                week: 1,
                omni: 26,
                href: 'https://github.com/mylove2918/terry',                
                blind: '텐트로 찾아온 보름달'
            },
            {
                week: 1,
                omni: 26,
                href: 'https://github.com/mylove2918/terry',                
                blind: '텐트로 찾아온 보름달'
            },
        ],
        [
            {                
                week: 2,
                omni: 22,
                href: 'https://github.com/mylove2918/terry',
                blind: '아빠랑 여행갈래?'
            },
            {
                week: 2,
                omni: 23,
                href: 'https://github.com/mylove2918/terry',                
                blind: '여행 후에 남겨진 것들'
            },
            {
                dotcom: 2,
                week: 2,
                omni: 24,
                href: 'https://github.com/mylove2918/terry',
                blind: '어제는 운동장, 오늘은 캠핑장'
            },
            {
                week: 1,
                omni: 25,
                href: 'https://github.com/mylove2918/terry',                
                blind: '작은거인'
            },
            {
                week: 1,
                omni: 26,
                href: 'https://github.com/mylove2918/terry',                
                blind: '텐트로 찾아온 보름달'
            },
        ],
        [
            {                
                week: 2,
                omni: 22,
                href: 'https://github.com/mylove2918/terry',
                blind: '아빠랑 여행갈래?'
            },
            {
                dotcom: 1,
                week: 2,
                omni: 23,
                href: 'https://github.com/mylove2918/terry',                
                blind: '여행 후에 남겨진 것들'
            },
            {
                week: 2,
                omni: 24,
                href: 'https://github.com/mylove2918/terry',
                blind: '어제는 운동장, 오늘은 캠핑장'
            },
            {
                week: 1,
                omni: 25,
                href: 'https://github.com/mylove2918/terry',                
                blind: '작은거인'
            },
            {
                week: 1,
                omni: 26,
                href: 'https://github.com/mylove2918/terry',                
                blind: '텐트로 찾아온 보름달'
            },
        ],
        
    ]

    
    
    cateDesc.forEach(function(item, idx){           
        const cateArr = []           
        const dotcom = []  

        for(var i=0; i <item.length; i++) {            
            const cateSlide = `
                <div class="swiper-slide">                
                    <img src="//images.samsung.com/kdp/event/sec/PM_0304_the_freestyle_playlist/plt_category_01_${item[i].omni}.jpg" alt="">
                    <div class="blind">${item[i].blind}</div>
                </div>
            `            

            cateArr.push(cateSlide);   
            
            if (item[i].dotcom) {
                dotcom.push(item[i])
                
                
                dotcom.forEach(function(item, idx) {
                    const pickSlide = `

                            <div class="swiper-slide">                
                                <img src="//images.samsung.com/kdp/event/sec/PM_0304_the_freestyle_playlist/plt_category_01_${item.omni}.jpg" alt="">
                                <div class="blind">${item.blind}</div>
                            </div>  
                        `                                        
                        const _dotcom = $('.dotcom .swiper-wrapper')
                        _dotcom.append(pickSlide)    
                })          
            }
            
        }

        const _html = $('.category .swiper-wrapper').eq(idx)
        
        _html.append(cateArr)
        
        
        
    })
});



