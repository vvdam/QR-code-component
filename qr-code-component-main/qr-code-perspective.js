const img = document.querySelectorAll("img");
//it was not in the "challenge" 
//but i thought it was a cool effect to add 
//and it's very simple to add 
img.forEach( el => { 
    el.addEventListener("mousemove", e => {
    
        let elRect = el.getBoundingClientRect()
        
        let x = e.clientX - elRect.x
        let y =  e.clientY - elRect.y

    
        let midCardWidth = elRect.width / 2
        let midCardHeight = elRect.height / 2
    
        
        
    
        let angleY = (x - midCardWidth) / 4
        let angleX = (y - midCardHeight) / 4


        el.style.transform = `perspective(9000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
    
    })
    el.addEventListener("mouseleave", e => {

        el.style.transform = 'none'

    })

});