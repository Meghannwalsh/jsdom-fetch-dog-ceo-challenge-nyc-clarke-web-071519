console.log('%c HI', 'color: firebrick')

// document.addEventListener("DOMContentLoaded", function(){
//      fetch("https://dog.ceo/api/breeds/image/random/4")
//             .then(response => response.json())
//             .then(array => {
//                 array.message.forEach(picture => {
//                 let image = document.createElement("img");
//                 image.src = picture
//                 let div = document.querySelector('#dog-image-container')
//                 div.appendChild(image)
//                 })
//           })

//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//         fetch(breedUrl)
//         .then(response => response.json())
//         .then(parsed => {
//            Object.keys(parsed.message).forEach(breed => {
//                let ul = document.querySelector('ul')
//                let li = document.createElement('li')
//                li.innerText = breed
//                ul.appendChild(li)
//            })
//         })

//         let ul = document.querySelector('ul')
//         ul.addEventListener('click', function() {
//             if event.target.innerText === 
//         })
// })



document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(imagesObj => {
            imagesObj.message.forEach(img => {
                let imageElement = document.createElement('img')
                imageElement.src = img
                let div = document.querySelector("#dog-image-container")
                div.appendChild(imageElement)
            })
        })

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(breedsObj => {
           Object.keys(breedsObj.message).forEach(breed => {
               let breedElement = document.querySelector("#dog-breeds")
               let li = document.createElement('li')
               li.innerText = breed
               breedElement.appendChild(li)
           })
        })

        let ul = document.querySelector('ul')
        ul.addEventListener('click', function(event) {
        
           if (event.target.tagName === "LI") {
               event.target.style.color = 'red'
           }
        })

    let select = document.querySelector("#breed-dropdown")
        select.addEventListener('change', function(event) {
            let allLIs = document.querySelectorAll("li")
            allLIs.forEach(li => {
                li.style.display = ""
                if (event.target.value !== li.innerText[0]) {
                    li.style.display = "none"            
                }
            })
            
            // if event.target.tagName[0]

        })
})

// <img class="ndskjfnkdfjn" src="dhakhdekuhkdsfj"><img>

