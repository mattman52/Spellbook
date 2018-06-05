const form = document.querySelector('form')

const changeHeading = function(ev){
    ev.preventDefault()

    const f = ev.target
    const spellsDiv = document.querySelector('#spells')

    const spellName = document.createTextNode(f.spellName.value +" ")
    const powerLevel = document.createTextNode(f.powerLevel.value)
    const list = document.createElement('li')

    const colorChangeSpell = document.createElement('span')
    const colorChangePower = document.createElement('span')

    colorChangeSpell.setAttribute('class', 'spellChange')
    colorChangePower.setAttribute('class', 'powerChange')

    colorChangeSpell.appendChild(spellName)
    colorChangePower.appendChild(powerLevel)

    
    list.appendChild(colorChangeSpell)
    list.appendChild(colorChangePower)
    document.querySelector('ul').appendChild(list)

    f.reset()
}

form.addEventListener('submit', changeHeading)