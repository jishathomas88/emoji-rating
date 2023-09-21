const starsEl=document.querySelectorAll('.fa-star')
const emojisEl=document.querySelectorAll('.fa-regular')
const colorArray=["red","lightblue","orange","lightgreen","green"]

updateRating(0)

starsEl.forEach((starEl,index)=>{
starEl.addEventListener("click",()=>{
    updateRating(index)
})
});

function updateRating(index){
    console.log(index)
    starsEl.forEach((starEl,indx)=>{
        if(indx < index+1){
          starEl.classList.add("active")
        }
        else{
            starEl.classList.remove("active")
        }
    })
    emojisEl.forEach(emojiEl=>{
        emojiEl.style.transform=`translateX(-${index*50}px)`
        emojiEl.style.color=colorArray[index]
    })

}