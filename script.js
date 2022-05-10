let header = document.querySelector('header')

let arr  = ['Все курсы', 'Успейте записаться', 'Преподователи', 'Фотографии', 'Бесплатный урок', 'Контакты', 'UZ']

createElem(arr)


function createElem(arr) {
    let logo_side = document.createElement('div')    
    let text = document.createElement('div')    
    let btn__menu = document.createElement('div')
    let btn  = document.createElement('button')
    let span;
    let img = document.createElement('img')     
    let img2 = document.createElement('img')     

    for (const item of arr) {
        span = document.createElement('span')
        span.innerHTML = item
        text.append(span)
    }      
    //
    logo_side.className = 'logo_side'
    text.className = 'text'
    btn__menu.className = 'btn__menu'
    img.src = './wepro-logo-18EB57DE89-seeklogo.com-removebg-preview.png'
    img2.src = './2png-removebg-preview.png'
    btn.innerHTML = 'Консультатция'
    img.className = 'img'
    // 
    header.append(logo_side, text, btn__menu)
    logo_side.append(img)
    btn__menu.append(btn, img2)
}

let main = document.querySelector('main')

let arr2  = [
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    },
    {
        title: 'Grafik Dizayn',
        seat: 8,
        day: 'понидельник-среда-пятница',
        time: '13:30 - 15:00',
        long: 4,
        price: '515,000 сум/месяц',
        teacher: 'Абдурахмонов Сохиб',
    }
]
create(arr2)

function create(arr) {
    for (const item of arr) {
        let box = document.createElement('div')
        let top = document.createElement('div')
        let center = document.createElement('div')
        let btn = document.createElement('div')
        let h2 = document.createElement('h2')
        let span = document.createElement('span')
        let span2 = document.createElement('span')
        let liner = document.createElement('div')
        let line = document.createElement('div')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')
        let button = document.createElement('button')

        // 
        box.className = 'box'
        top.className = 'top'
        h2.innerHTML = item.title
        span.className = 'seat'
        span.innerHTML = "Осталось мест: "
        span2.innerHTML = item.seat
        span2.className = 'span2'
        liner.className = 'liner'
        line.className = 'line'
        center.className = 'center'
        p.innerHTML = `Дни: ${item.day}` 
        p2.innerHTML = `Время: ${item.time}` 
        p3.innerHTML = `Длительность: ${item.long}` 
        p4.innerHTML = `Цена: ${item.price}` 
        p5.innerHTML = `Преподователь: ${item.teacher}` 
        btn.className = 'btn'
        button.className = 'but'
        button.innerHTML = 'Записаться'

        //
        main.append(box)
        box.append(top, center, btn)
        top.append(h2, span, liner)
        liner.append(line)
        span.append(span2)
        center.append(p,p2,p3,p4,p5)
        btn.append(button)
    }


}