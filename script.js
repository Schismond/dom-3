let openButton = document.getElementsByClassName('open-btn');
let closeButton = document.getElementsByClassName('close-btn');
let ans = document.getElementsByClassName ('answer')

    for (let i=0 ; i<3 ; i++){
        console.log(openButton);
        openButton[i].addEventListener('click', function(){   
        ans[i].style.display='block';
        closeButton[i].style.display = 'block';
        openButton[i].style.display = 'none';
        }
        );
        }

    for (let i=0 ; i<3 ; i++){
        console.log(openButton);
        closeButton[i].addEventListener('click', function(){   
        ans[i].style.display='none';
        closeButton[i].style.display = 'none';
        openButton[i].style.display = 'block';
        }
        );
        }

