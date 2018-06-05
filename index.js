const form = document.querySelector('form')

const changeHeading = function(ev){
    ev.preventDefault()

    const f = ev.target
    const spellName = f.spellName.value
    const powerLevel = f.powerLevel.value
    const spellsDiv = document.querySelector('#spells')

    const list = document.createElement("li")
    const spellPower = document.createTextNode(spellName + ' ' +powerLevel)
    list.appendChild(spellPower)
    document.querySelector("ul").appendChild(list)
    



    f.reset()
}

form.addEventListener('submit', changeHeading)