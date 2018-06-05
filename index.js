const form = document.querySelector('form')

const changeHeading = function(ev){
    ev.preventDefault()

    const f = ev.target
    const spellName = f.spellName.value
    const powerLevel = f.powerLevel.value
    const spellsDiv = document.querySelector('#spells')
    spellsDiv.innerHTML += `<li>${spellName +' ' +powerLevel}</li>`
    //'<p>' +spellName + ' ' + powerLevel +'</p>'


    f.reset()
}

form.addEventListener('submit', changeHeading)