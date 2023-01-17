const wrapper = document.querySelector('.wrapper')
const container = document.querySelector('.container')
const buttons = document.querySelectorAll('.buttons button')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')

let index = 0

let interval = setInterval(() => {
    if (index == 3) {
        index = 0
    }
    wrapper.style.transform = 'translateX(-' + index * 1000 + 'px)'
    index++
}, 5000)

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        index = i
        wrapper.style.transform = 'translateX(-' + index * 1000 + 'px)'
    })
})

container.addEventListener('mouseenter', () => {
    clearInterval(interval)
})


container.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        if (index == 3) {
            index = 0
        }
        wrapper.style.transform = 'translateX(-' + index * 1000 + 'px)'
        index++
    }, 5000)
})

leftBtn.addEventListener('click', () => {
    if ( index == 0) {
        index = 3
    } else {
        index--
    }
    wrapper.style.transform = 'translateX(-' + index * 1000 + 'px)'
})

rightBtn.addEventListener('click', () => {
    if (index == 3) {
        index = -1
    }
    index++
    wrapper.style.transform = 'translateX(-' + index * 1000 + 'px)'
})

// TODO

// ses ile sağ ve sol yönleri eklenmeli.

// window.addEventListener('load', () => {
//     window.SpeechRecognition = window.webkitSpeechRecognition
//     const recognition = new SpeechRecognition()

//     recognition.lang = 'tr-TR'
//     recognition.interimResults = true
//     recognition.continuous = true
//     recognition.start()

//     recognition.addEventListener('result', e => {
//         const direction = e.results[e.results.length - 1][0].transcript.toLowerCase()
//         console.log(direction)

//         if (direction.includes('sol')) {
//             if ( index == 0) {
//                 index = 3
//             } else {
//                 index--
//             }
//         } else if (direction.includes('sağ')) {
//             if (index == 4) {
// 				index = 0
// 			}
//             index++
//         }
//         wrapper.style.transform = 'translateX(-' + index * 1000 + 'px)'

//     })
// })