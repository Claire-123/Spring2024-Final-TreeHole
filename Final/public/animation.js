window.onload =()=>{
    toWhite()
}

function toWhite(){
    var element = document.getElementById('toWhite');
    element.addEventListener('animationend', function() {
        this.style.display = 'none';
        console.log('hide')
    });
}