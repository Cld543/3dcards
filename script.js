const cards = document.getElementsByClassName('card')
const flipBtn = document.getElementById('flip-button')

for (let i = 0; i < cards.length; i++) {
    cards[i].style.transitionDelay = `${i * 0.100}s`
}

flipBtn.addEventListener('click', () => {
    for (let c of cards) {
        if (c.classList.contains('flipped')) {
            c.style.transform = "rotateY(0deg)"
            c.classList.remove('flipped')
        }
        else {
            c.style.transform = "rotateY(180deg)"
            c.classList.add('flipped')
        }
        
    }
 })