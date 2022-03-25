// http://www.omdbapi.com/?apikey=7035c60c&s=frozen

import axios from 'axios'

let _state
let _input = $('.movie_title').val()     

$('.movie_search').on('click', function(e){
    e.preventDefault()
    _input = $('.movie_title').val()         
    fetchMovies(_input);
})



function fetchMovies(_input) {

    axios
        .get(`https://www.omdbapi.com/?apikey=7035c60c&s=${_input}`)
        .then((res) => {
            console.log('res', res)    
            
            if(res.data.Error) {
                const _ul = $('ul');
                let _html = '';
                _html += `
                    <p>영화제목을 영어로 입력해 주십시오. <br> 만약 영문입력시 검색결과값이 없다면 <br> 검색어를 변경해 주세요</p>
                `

                _ul.html(_html)
            } else {
                const _ul = $('ul');
                let _html = '';

                for(var i=0; i < res.data.Search.length; i++) {
                    let _title = res.data.Search[i].Title;
                    let _poster = res.data.Search[i].Poster;
                    let _year = res.data.Search[i].Year;
                    
                    _html += `
                    <li>
                        <p class="movie_title">제목 : ${_title}</p>
                        <p>개봉연도 : <span class="movie_year">${_year}년</span></p>
                        <div class="img_box">
                            <img src="${_poster}" alt="">
                        </div>
                    </li>
                    `
                    
            }
            _ul.html(_html);         
            }             
        })

    


    
}

