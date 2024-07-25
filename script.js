const buttons= document.querySelectorAll('.box')
const body=document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click',function(e){
          
        body.style.backgroundColor=button.id;
        
    })
});