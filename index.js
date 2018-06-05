const form = document.querySelector('form')

const changeHeading = function(ev){
    ev.preventDefault()

    const f = ev.target
    const spellName = f.spellName.value
    const powerLevel = f.powerLevel.value
    const spellsDiv = document.querySelector('#spells')
    const list = document.createElement("ul")
    const spellPower = document.createTextNode(spellName + ' ' +powerLevel)
    list.appendChild(spellPower)
    document.body.appendChild(list)
    
    //spellsDiv.innerHTML += `<li>${spellName +' ' +powerLevel}</li>`



    f.reset()
}

form.addEventListener('submit', changeHeading)