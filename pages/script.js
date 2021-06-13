let item=document.querySelectorAll(".scroll li");
for(let i=0;i<item.length;i++){
    item[i].onclick=function(){
        let a=0;
        while(a<item.length){
            item[a++].className="check";
        }
        item[i].className="check active";
    }
}
function change(any){
    document.querySelector('.main-img').src=any;
}
function color(change){
    let c=document.querySelector(".bg");
    c.style.background=change;
}