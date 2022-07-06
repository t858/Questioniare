const question = document.querySelectorAll(".questions")


question.forEach(function (quest) {
    const button = quest.querySelector(".btn")

    button.addEventListener("click", function(){

        question.forEach(function (item) {
            
            if (item !== quest) {
                
                item.classList.remove("show-text")
            }
        })

        quest.classList.toggle("show-text")
    })
})