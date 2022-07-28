function setbluebackground() {
    let element = document.getElementById('style-text')
    element.style.backgroundColor = '#E75590'
    element.style.width = '350px'
}

function settranspatentbackground() {
    document.getElementById('style-text').style.background = 'transparent'
}

function setredcolor() {
    let element = document.getElementById('style-text')
    element.classList.add("red-color")
}

function removeredcolor() {
    document.getElementById('style-text').classList.remove('red-color')
    
}