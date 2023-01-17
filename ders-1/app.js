// Değişken atama
const isim = "sebahattin"
let isim2 = "sebahattin"
isim2 = "talha"
console.log(isim2)

// Dizi tanımlama
const meyveler = ["muz", "elma", "armut"]
meyveler.forEach(meyve => console.log(meyve))

// Fonksiyon tanımlama
function fonksiyon(isim) {
    console.log("fonksiyon çağrıldı")
}

fonksiyon()

// Fonksiyon tanımlama ikinci yöntem (arrow function)
const fonksiyon2 = (isim, soyisim) => {
    console.log(isim + " " + soyisim)
}

fonksiyon2('talha', 'çorbacı')

// DOM etkileşimleri
const baslik = document.querySelector("#baslik")

baslik.style.color = "blue"

const box = document.querySelector('#box')

box.addEventListener('click', (e) => {
    box.classList.toggle('active')
})

// Mini App: formdaki input değerlerini alma
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')

let formData = {
    name :'',
    surname: ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formData)
})

inputs.forEach(input => {
    input.addEventListener('change', e => {
        if (e.target.name == 'name') {
            formData.name = e.target.value
        } else {
            formData.surname = e.target.value
        }
    })
})

// fetch api birinci yöntem
fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => console.log(data))

// fetch api ikinci yöntem
const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}
fetchUsers()

// Array Destruction

// const arr = [1, 'talha', 'çorbacı']
// const [id, name1, surname] = arr
// console.log(id + ' ' + name1 + ' ' + surname)


// //   Object Descturction

// const obj = {
//     id: 1,
//     surname: 'çolak'
// }
// const {id, surname} = obj
// console.log(id + ' ' + surname)