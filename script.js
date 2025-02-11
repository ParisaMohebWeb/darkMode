const swich = document.querySelector('.swich')
let counter = 1

swich.addEventListener('click', () => {
    //true =1 
    //false= 0
    if (counter % 2) {
        document.body.classList.add('darkmode')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.classList.remove('darkmode')
        localStorage.setItem('theme', 'light')
    }
    counter++
})

//on loud
document.addEventListener('DOMContentLoaded',()=>{
  let status = localStorage.getItem('theme')
    if (status ==='dark') {
        document.body.classList.add('darkmode')      
    }
})

