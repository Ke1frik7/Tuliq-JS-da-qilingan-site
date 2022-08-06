document.body.classList = 'quick'

let navbar = document.createElement('div')
navbar.className = 'navbar quick'
document.body.appendChild(navbar)

let navbarContainer = document.createElement('div')
navbarContainer.classList = 'navbar-container'
navbarContainer.id = 'navbarContainer'
navbar.appendChild(navbarContainer)

let navbarBrand = document.createElement('div')
navbarBrand.classList = 'navbar-brand'
navbarContainer.appendChild(navbarBrand) 

let h1 = document.createElement("h1")
h1.appendChild(document.createTextNode('Dev JS'))
navbarBrand.appendChild(h1)

let navigation = document.createElement('div')
navigation.id = 'navigation'
navigation.classList = 'navigation quick'
navbarContainer.appendChild(navigation)

let burgers = document.createElement('div')
burgers.id = 'burger'
let img = document.createElement("img")
img.src = './images/menu.png'
img.id = 'burgerImg'
burgers.appendChild(img)
navbarContainer.appendChild(burgers)

let a1 = document.createElement('a')
a1.appendChild(document.createTextNode('Home'))
navigation.appendChild(a1)

let a2 = document.createElement('a')
a2.appendChild(document.createTextNode('About'))
navigation.appendChild(a2)

let a3 = document.createElement('a')
a3.appendChild(document.createTextNode('History'))
navigation.appendChild(a3)

let a4 = document.createElement('a')
a4.appendChild(document.createTextNode('Contact'))
navigation.appendChild(a4)


let home = document.createElement('home')
home.className = 'home quick'

document.body.appendChild(home)
let homeContainer = document.createElement('div')
homeContainer.className = 'home-container'
home.appendChild(homeContainer)

let homeTitle = document.createElement('div')
homeTitle.className = 'home-title'
homeContainer.appendChild(homeTitle)

let homeTitleH1 = document.createElement('h1')
homeTitleH1.appendChild(document.createTextNode('Bu site tuliq JS da tuzilgan ... '))
homeTitle.appendChild(homeTitleH1)

let homeTitleP = document.createElement('p')
homeTitleP.appendChild(document.createTextNode('Bu Hozirgi BitCoin narxi ... '))
homeTitle.appendChild(homeTitleP)

let homeTitleP2 = document.createElement('p')
homeTitleP2.appendChild(document.createTextNode(''))
homeTitleP2.id = 'homeTitleP2'
homeTitle.appendChild(homeTitleP2)

window.addEventListener('load', () => {
    messi() 
})
function messi(){
    let xml = new XMLHttpRequest()
    let url = 'https://blockchain.info/q/24hrprice'
    xml.onload = function(){
        try{
            xml = this.responseText;
            document.getElementById('homeTitleP2').innerHTML = xml
        }
        catch(e){
            console.log('ERROR', e)
        }
    }
    xml.open('GET', url)
    xml.send()
}
let inputDiv = document.createElement('div')
inputDiv.classList = 'input-div'
homeContainer.appendChild(inputDiv)
let input = document.createElement('input')
input.id =  'messi'
input.placeholder = 'Qidiring va HTML teglari bilan tanishing'
inputDiv.appendChild(input)
let inputDivButton = document.createElement('button')
inputDivButton.id = 'inputDivButton'
inputDivButton.appendChild(document.createTextNode('Qidiring'))
inputDiv.appendChild(inputDivButton)
let natija = document.createElement('div')
natija.id = 'natija'
document.body.appendChild(natija)
let button  = document.getElementById('inputDivButton').onclick = function(){
    let input1 = document.getElementById('messi').value
    console.log(input1)
    let natija = document.getElementById('natija')
    let h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Bu HTML ning h1 tegi '))
    let h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode('Bu HTML ning h2 tegi '))
    let h3 = document.createElement('h3')
    h3.appendChild(document.createTextNode('Bu HTML ning h3 tegi '))
    let h4 = document.createElement('h4')
    h4.appendChild(document.createTextNode('Bu HTML ning h4 tegi '))
    let h5 = document.createElement('h5')
    h5.appendChild(document.createTextNode('Bu HTML ning h5 tegi '))
    let h6 = document.createElement('h6')
    h6.appendChild(document.createTextNode('Bu HTML ning h6 tegi '))
    let input = document.createElement('input')
    input.placeholder = 'Bu input HTML form oilasidan'
    input.style.width = '20%'
    input.style.height = '25px'
    let textarea = document.createElement('textarea')
    textarea.placeholder = 'Bu textArea form oilasidan'
    textarea.style.width = '20%'
    textarea.style.height = '150px'
    let p = document.createElement('p')
    p.appendChild(document.createTextNode('Bu html ning p tegi hisonlanadi ... '))
    let span = document.createElement('span')
    span.appendChild(document.createTextNode('Bu HTML ning span tegi hisoblanadi ... '))
    let inputType = document.createElement('input')
    inputType.type = 'radio'
    if(input1 == 'h1'){
        natija.appendChild(h1)
    }else if(input1 == 'h2'){
        natija.appendChild(h2)
    }
    else if(input1 == 'h3'){
        natija.appendChild(h3)
    }
    else if(input1 == 'h4'){
        natija.appendChild(h4)
    }
    else if(input1 == 'h5'){
        natija.appendChild(h5)
    }
    else if(input1 == 'h6'){
        natija.appendChild(h6)
    }
    else if(input1 == 'input'){
        natija.appendChild(input)
    }else if(input1 == 'textarea'){
        natija.appendChild(textarea)
    }
    else if(input1 == 'p'){
        natija.appendChild(p)
    }
    else if(input1 == 'span'){
        natija.appendChild(span)
    }
    else if(input1 == 'input type radio'){
        natija.appendChild(inputType)
    }
}

let knopkalar = document.createElement('div')
knopkalar.classList = 'knopkalar'
navbar.appendChild(knopkalar)
let chorni  = document.createElement('button')
chorni.id = 'chorni'
chorni.appendChild(document.createTextNode('Tungi rejim ... '))
knopkalar.appendChild(chorni)
let body = document.querySelector("body")
body.style.overflowX = 'hidden'
let oq  = document.createElement('button')
oq.id = 'oq'
oq.appendChild(document.createTextNode('Kunduzgi rejim ... '))
knopkalar.appendChild(oq)


let chorniy = document.getElementById('chorni')
chorniy.addEventListener('click', rejim)
function rejim(){
    document.body.style.background = 'black'
    navbarContainer.style.background = '#fff'
    homeTitle.style.color = '#fff'
    natija.style.color = '#fff'   
    soatTitle.style.color = 'red'
}
let oq2 = document.getElementById('oq')
oq2.addEventListener('click' ,oqRejim)
function oqRejim(){
    document.body.style.background = '#fff'
    navbarContainer.style.background = 'rgba(128, 128, 128, 0.303)'
    homeTitle.style.color = '#000'
    natija.style.color = '#000'   
    soatTitle.style.color = '#000'
}

let soat = document.createElement("div")
soat.className = 'soat'
document.body.appendChild(soat)
let soatContainer = document.createElement("div")
soatContainer.className = ' soat-container'
soat.appendChild(soatContainer)
let soatTitle = document.createElement('div')
soatTitle.className = 'soat-title'
soatContainer.appendChild(soatTitle)
let soatTitleH1 = document.createElement('h1')
soatTitleH1.id = 'vaqt'
soatTitleH1.appendChild(document.createTextNode('00'))
soatTitle.appendChild(soatTitleH1)
let soatTitleH2 = document.createElement('h1')
soatTitleH2.id = 'minut'
soatTitleH2.appendChild(document.createTextNode(''))
soatTitle.appendChild(soatTitleH2)
let soatTitleH3 = document.createElement('h1')
soatTitleH3.id = 'sekund'
let soatTitleH4 = document.createElement('h2')
soatTitleH4.id = 'millari'
soatTitleH4.appendChild(document.createTextNode("soat millari"))
soatTitle.appendChild(soatTitleH4)

let date = new Date()
let vaqt = document.getElementById('vaqt').innerHTML = date.getHours() + " : " 
let minut = document.getElementById('minut').innerHTML= date.getMinutes() 
// let sekund = document.getElementById('sekund').innerHTML = date.getSeconds()

let burgerFunction  = () => {
    let navigation = document.getElementById("navigation")
    let burgerImg = document.querySelector('#burgerImg')
    burgerImg.addEventListener("click", () => {
        console.log('ishladi')
        navigation.classList.toggle("active")
        navigation.style.transform = 'translate(0)'
        console.log(navigation)
    }) 
}
burgerFunction()
