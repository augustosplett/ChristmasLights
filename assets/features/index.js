function changeColor(element){
    const parent = element.parentNode
    const color = element.value
    const bulb = parent.getElementsByClassName('bulb')
    bulb[0].style.backgroundColor = color
}