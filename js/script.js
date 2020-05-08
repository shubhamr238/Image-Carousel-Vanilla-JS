// Add your javascript here
var count=1;
document.getElementById(count).style.backgroundColor='white';

document.getElementsByClassName('next')[0].addEventListener("click", function(){
    count++;
    if(count>5) count=1;
    document.getElementsByClassName('cariusel-img')[0].setAttribute('src', `./assets/images/img-${count}.jpg`);

    
    for(var i=1; i<=5; i++){
        if(i==count)
            document.getElementById(i).style.backgroundColor='white';
        else
            document.getElementById(i).style.backgroundColor='';
    }
});

document.getElementsByClassName('previous')[0].addEventListener("click", function(){
    count--;
    if(count<=0) count=5;
    document.getElementsByClassName('cariusel-img')[0].setAttribute('src', `./assets/images/img-${count}.jpg`);

    
    for(var i=1; i<=5; i++){
        if(i==count)
            document.getElementById(i).style.backgroundColor='white';
        else
            document.getElementById(i).style.backgroundColor='';
    }
});

var auto;
document.getElementById('slide').addEventListener('change', function() {
    if(this.checked) {
        auto= setInterval(function () {
            //console.log('ckecked');
            document.getElementsByClassName('next')[0].click();
        },3000);
        
    }
    else{
        //console.log("unchecked");
        clearInterval(auto);
    }
});