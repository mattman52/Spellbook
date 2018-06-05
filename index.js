console.log("testing")
// prints in the console when you inspect
// .warn for a warning 
const button = document.querySelector('button')
const NewSpell = document.querySelector('#Change')
const sayContents = function(){
    const heading = document.querySelector('#Title1')
    heading.textContent = 'Super Secret Spells'

    const heading2 = document.querySelector('#Spell1')
    heading2.textContent = 'Obliviate'

    const heading3 = document.querySelector('#Spell2')
    heading3.textContent = document.querySelector('#Change').value
}

button.addEventListener('click', sayContents)
NewSpell.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        button.click()
    }
})