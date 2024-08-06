var element = document.getElementById('element')

element.addEventListener('click', function(){
        if(element.checked){
                document.getElementById("img").style.border = "solid 2px red"
        }else {
                document.getElementById("img").style.border = "none"
        }
})