
      // navbar move value

      var location1 = document.querySelector('#page-1').offsetTop;
      var location2 = document.querySelector('#page-2').offsetTop;
      var location3 = document.querySelector('#page-3').offsetTop;

      // navbar move function

      document.querySelector('#navbar-home').addEventListener('click',function(){
        window.scrollTo({top:location1, behavior:"smooth"});
      })

      document.querySelector('#navbar-about').addEventListener('click',function(){
        window.scrollTo({top:location2, behavior:"smooth"});
      })

      document.querySelector('#navbar-link').addEventListener('click',function(){
        window.scrollTo({top:location3, behavior:"smooth"});
      })



      // navbar UI transform function


      document.querySelector('#navbar-home').addEventListener('mouseenter',function(){
        document.getElementById('navbar-home').style.fontSize = '35px'
        document.getElementById('navbar-home').style.transition = 'all 0.3s ease'
        document.getElementById('navbar-home').style.fontWeight = 'bold'

      })

      document.querySelector('#navbar-home').addEventListener('mouseleave',function(){
        document.getElementById('navbar-home').style.fontSize = '25px'
        document.getElementById('navbar-home').style.transition = 'all 0.3s ease'
        document.getElementById('navbar-home').style.fontWeight = 'normal'

      })

      document.querySelector('#navbar-about').addEventListener('mouseenter',function(){
        document.getElementById('navbar-about').style.fontSize = '35px'
        document.getElementById('navbar-about').style.transition = 'all 0.3s ease'
        document.getElementById('navbar-about').style.fontWeight = 'bold'

      })

      document.querySelector('#navbar-about').addEventListener('mouseleave',function(){
        document.getElementById('navbar-about').style.fontSize = '25px'
        document.getElementById('navbar-about').style.transition = 'all 0.3s ease'
        document.getElementById('navbar-about').style.fontWeight = 'normal'

      })

      document.querySelector('#navbar-link').addEventListener('mouseenter',function(){
        document.getElementById('navbar-link').style.fontSize = '35px'
        document.getElementById('navbar-link').style.transition = 'all 0.3s ease'
        document.getElementById('navbar-link').style.fontWeight = 'bold'

      })

      document.querySelector('#navbar-link').addEventListener('mouseleave',function(){
        document.getElementById('navbar-link').style.fontSize = '25px'
        document.getElementById('navbar-link').style.transition = 'all 0.3s ease'
        document.getElementById('navbar-link').style.fontWeight = 'normal'

      })

      // next button , previous button

      var length = document.getElementsByClassName('images').length;
      var now = 1;


      document.querySelector('.btn-nxt').addEventListener('click',function(){
        if(now < length){    

            for(var i = 1; i <= length; i++){
                document.querySelector(`.${'img' + i}`).style.transform = `translateX(-${now * 590}px)`
                }

            now++;
        } else if(now == length){
            now = 0;

            for(var i = 1; i <= length; i++){
               document.querySelector(`.${'img' + i}`).style.transform = `translateX(-${now * 590}px)`
                }

            now++;
        }
    })

    document.querySelector('.btn-pre').addEventListener('click',function(){
        if(now == 1){
            now = length;

            for(var i = 1; i <= length; i++){
                document.querySelector(`.${'img' + i}`).style.transform = `translateX(-${(length - 1) * 590}px)`
                }

        } else if(now > 1){

            for(var i = 1; i <= length; i++){
                document.querySelector(`.${'img' + i}`).style.transform = `translateX(-${(now - 2) * 590}px)`
                }

            now--;
        }
    })

    // about menu transform function



    // position
    document.querySelector('.position').addEventListener('mouseenter',function(){
      document.querySelector('.position-inner').style.height = "10vh"
      document.querySelector('.position-inner').style.visibility = "visible"
      document.querySelector('.position-inner').innerHTML = "front-end"
      document.querySelector('.position').style.backgroundColor = "#c68400"
      document.querySelector('.position').style.width = "20vw"
      document.querySelector('.position').style.borderRadius = "10px"   
      document.querySelector('.position-banner').style.backgroundColor = "black"
      document.querySelector('.position-banner').style.color = "#ffb300" 
    })

    document.querySelector('.position').addEventListener('mouseleave',function(){
      document.querySelector('.position-inner').style.height = "0vh"
      document.querySelector('.position-inner').style.visibility = "hidden"
      document.querySelector('.position-inner').innerHTML = ""
      document.querySelector('.position-inner').style.display = "flex"
      document.querySelector('.position-inner').style.justifyContent = "center"
      document.querySelector('.position').style.backgroundColor = "#ffe54c"    
      document.querySelector('.position-banner').style.backgroundColor = "#ffb300"
      document.querySelector('.position-banner').style.color = "black"   
    })



    // name
    document.querySelector('.name').addEventListener('mouseenter',function(){
      document.querySelector('.name-inner').style.height = "10vh"
      document.querySelector('.name-inner').style.visibility = "visible"
      document.querySelector('.name-inner').innerHTML = "박승민"
      document.querySelector('.name-inner').style.display = "flex"
      document.querySelector('.name-inner').style.justifyContent = "center"
      document.querySelector('.name').style.backgroundColor = "#c68400"
      document.querySelector('.name').style.width = "15vw"
      document.querySelector('.name').style.borderRadius = "10px"   
      document.querySelector('.name-banner').style.backgroundColor = "black"
      document.querySelector('.name-banner').style.color = "#ffb300" 
    })

    document.querySelector('.name').addEventListener('mouseleave',function(){
      document.querySelector('.name-inner').style.height = "0vh"
      document.querySelector('.name-inner').style.visibility = "hidden"
      document.querySelector('.name-inner').innerHTML = ""      
      document.querySelector('.name').style.backgroundColor = "#ffe54c"
      document.querySelector('.name-banner').style.backgroundColor = "#ffb300"
      document.querySelector('.name-banner').style.color = "black" 
      })

    // email
    document.querySelector('.email').addEventListener('mouseenter',function(){
      document.querySelector('.email-inner').style.height = "20vh"
      document.querySelector('.email-inner').style.visibility = "visible"
      document.querySelector('.email-inner').innerHTML = `pmb087 <br/> @gmail.com`
      document.querySelector('.email-inner').style.display = "flex"
      document.querySelector('.email-inner').style.justifyContent = "center"
      document.querySelector('.email').style.backgroundColor = "#c68400"
      document.querySelector('.email').style.width = "20vw"
      document.querySelector('.email-inner').style.textTransform = "lowercase";
      document.querySelector('.email').style.borderRadius = "10px"
      document.querySelector('.email-banner').style.backgroundColor = "black"
      document.querySelector('.email-banner').style.color = "#ffb300" 
    })

    document.querySelector('.email').addEventListener('mouseleave',function(){
      document.querySelector('.email-inner').style.height = "0vh"
      document.querySelector('.email-inner').style.visibility = "hidden"
      document.querySelector('.email-inner').innerHTML = ""      
      document.querySelector('.email').style.backgroundColor = "#ffe54c"     
      document.querySelector('.email-banner').style.backgroundColor = "#ffb300"
      document.querySelector('.email-banner').style.color = "black"  
    })


    // stack
    document.querySelector('.stack').addEventListener('mouseenter',function(){
      document.querySelector('.stack-inner').style.height = "10vh"
      document.querySelector('.stack-inner').style.visibility = "visible"
      document.querySelector('.stack-inner').innerHTML = `<i class="fa-brands fa-html5 fa-2x"></i>
      <i class="fa-brands fa-css3 fa-2x"></i>
      <i class="fa-brands fa-js-square fa-2x"></i>`
      document.querySelector('.stack-inner').style.display = "flex"
      document.querySelector('.stack-inner').style.justifyContent = "center"
      document.querySelector('.stack').style.backgroundColor = "#c68400"
      document.querySelector('.stack').style.width = "15vw"
      document.querySelector('.stack').style.borderRadius = "10px"
      document.querySelector('.stack-banner').style.backgroundColor = "black"
      document.querySelector('.stack-banner').style.color = "#ffb300" 
    })

    document.querySelector('.stack').addEventListener('mouseleave',function(){
      document.querySelector('.stack-inner').style.height = "0vh"
      document.querySelector('.stack-inner').style.visibility = "hidden"
      document.querySelector('.stack-inner').innerHTML = ""
      document.querySelector('.stack').style.backgroundColor = "#ffe54c"  
      document.querySelector('.stack-banner').style.backgroundColor = "#ffb300"
      document.querySelector('.stack-banner').style.color = "black"      
    })


     // cell phone
     document.querySelector('.phone').addEventListener('mouseenter',function(){
      document.querySelector('.phone-inner').style.height = "20vh"
      document.querySelector('.phone-inner').style.visibility = "visible"
      document.querySelector('.phone-inner').innerHTML = `+082) <br/>10-5338-4404`      
      document.querySelector('.phone-inner').style.display = "flex"
      document.querySelector('.phone-inner').style.justifyContent = "center"
      document.querySelector('.phone').style.backgroundColor = "#c68400"
      document.querySelector('.phone').style.width = "20vw"
      document.querySelector('.phone-inner').style.textTransform = "lowercase";
      document.querySelector('.phone').style.borderRadius = "10px"
      document.querySelector('.phone-banner').style.backgroundColor = "black"
      document.querySelector('.phone-banner').style.color = "#ffb300" 
    })

    document.querySelector('.phone').addEventListener('mouseleave',function(){
      document.querySelector('.phone-inner').style.height = "0vh"
      document.querySelector('.phone-inner').style.visibility = "hidden"
      document.querySelector('.phone-inner').innerHTML = ""
      document.querySelector('.phone').style.backgroundColor = "#ffe54c"    
      document.querySelector('.phone-banner').style.backgroundColor = "#ffb300"
      document.querySelector('.phone-banner').style.color = "black"      
    })


    // link function


    // github
    document.querySelector('.github-link').addEventListener('mouseenter',function(){
      document.querySelector('.github-link').style.width = "35%"
      document.querySelector('.github-link').style.height = "46vh"
      document.querySelector('.github-link').style.fontSize = "66px"
      document.querySelector('.github-link').style.backgroundColor = "black"
      document.querySelector('.github-link a').style.color = "#ffe54c"
    })

    document.querySelector('.github-link').addEventListener('mouseleave',function(){
      document.querySelector('.github-link').style.width = "30%"
      document.querySelector('.github-link').style.height = "40vh"
      document.querySelector('.github-link').style.fontSize = "60px"
      document.querySelector('.github-link').style.backgroundColor = "#ffe54c"
      document.querySelector('.github-link a').style.color = "black"
    })

    // velog
    document.querySelector('.velog-link').addEventListener('mouseenter',function(){
      document.querySelector('.velog-link').style.width = "35%"
      document.querySelector('.velog-link').style.height = "46vh"
      document.querySelector('.velog-link').style.fontSize = "66px"
      document.querySelector('.velog-link').style.backgroundColor = "black"
      document.querySelector('.velog-link a').style.color = "#ffe54c"
    })

    document.querySelector('.velog-link').addEventListener('mouseleave',function(){
      document.querySelector('.velog-link').style.width = "30%"
      document.querySelector('.velog-link').style.height = "40vh"
      document.querySelector('.velog-link').style.fontSize = "60px"
      document.querySelector('.velog-link').style.backgroundColor = "#ffe54c"
      document.querySelector('.velog-link a').style.color = "black"
    })

