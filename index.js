let myBtn =document.querySelector('.myBtn')

let modalBox = document.querySelector('.modalBox')

let myContainer = document.querySelector('.myContainer')

let x = document.querySelector('.x')



myBtn.addEventListener('click',function(){
    myContainer.setAttribute('style','filter:blur(5px)')
    modalBox.style.display= ' block'
    myBtn.blur()

    document.body.addEventListener('keyup',function(event){
       if(event.key =='Escape'){

        myContainer.setAttribute('style','filter:blur(0px)')
        modalBox.style.display= ' none'
        
       }
    })
})




let circleBox = document.querySelectorAll('.circleBox')
let myTitleBox = document.querySelector('.myTitleBox')



circleBox.forEach(function(item){
    
    item.addEventListener('mousemove',function(){
       
        if(item.className=='circleBox facebook'){
            myTitleBox.children[0].children[0].style.display='block'

        } 
        
        //myTitleBox.style.display='block'
        item.addEventListener('mouseleave',function(){
            
           myTitleBox.children[0].children[0].style.display='none'
        //myTitleBox.style.display='none'
            
        })
        
    })
    item.addEventListener('mousemove',function(){
       
        if(item.className=='circleBox twitter'){
            myTitleBox.children[0].children[1].style.display='block'
        } 
        
        //myTitleBox.style.display='block'
        item.addEventListener('mouseleave',function(){
            
           myTitleBox.children[0].children[1].style.display='none'
        //myTitleBox.style.display='none'
            
        })
        
    })
    item.addEventListener('mousemove',function(){
       
        if(item.className=='circleBox instagram'){
            myTitleBox.children[0].children[2].style.display='block'
        } 
        
        //myTitleBox.style.display='block'
        item.addEventListener('mouseleave',function(){
            
           myTitleBox.children[0].children[2].style.display='none'
        //myTitleBox.style.display='none'
            
        })
        
    })
    item.addEventListener('mousemove',function(){
       
        if(item.className=='circleBox github'){
            myTitleBox.children[0].children[3].style.display='block'
        } 
        
        //myTitleBox.style.display='block'
        item.addEventListener('mouseleave',function(){
            
           myTitleBox.children[0].children[3].style.display='none'
        //myTitleBox.style.display='none'
            
        })
        
    })
    item.addEventListener('mousemove',function(){
       
        if(item.className=='circleBox youtube'){
            myTitleBox.children[0].children[4].style.display='block'
        } 
        
        //myTitleBox.style.display='block'
        item.addEventListener('mouseleave',function(){
            
           myTitleBox.children[0].children[4].style.display='none'
        //myTitleBox.style.display='none'
            
        })
        
    })
    
    
    

})


