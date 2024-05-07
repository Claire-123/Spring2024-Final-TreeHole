window.onload =()=>{
    showPostForm()
    console.log('show div script loaded')
}

function showPostForm(){
    document.getElementById('cross').addEventListener('click', ()=>{
        var form = document.getElementById('makePost');
        console.log('cross clicked')
        // console.log(form.style.display)
        if (form.style.display === 'block') {
            form.style.display = 'none';
        }
    })
}