console.log('Warsztaty z ustawiania tła dla elementów HTML');



const setBackground = () => {

    let p1 = document.querySelector('.first');

    let p2 = document.querySelector('.last');


    // metoda toogle dodaje klasę tam gdzie jej nie ma i usuwa tam gdzie jej nie ma 
    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
    // p1.classList.add('bg-red');
    // p2.classList.add('bg-yellow');
    // ---------------------------------
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';
}


let btnSetBackground = document.getElementById('set-background');


// Nie daje nawiasu za setBackground bo funkcja uruchomiła by się przy ładowaniu strony, a ona ma w momencie kliknięcia
btnSetBackground.addEventListener('click', setBackground) 
