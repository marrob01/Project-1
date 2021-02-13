
let userCards = []
class Cards {
    constructor(deck){
        this.deck =[]

        const numbers = [1, 2, 3, 4]
        const cards =  ['Apple', 'Orange','Banana', 'Mango' ]

        for (let num in numbers){
            for(let furit in cards){
                this.deck.push( `${numbers[num]} of ${cards[furit]}`)
            }
        }

    }
     dealCards () {
       const ranDeck= this.deck.sort(() => Math.random() - 0.5);
    //    console.log(ranDeck)
    //    const randomCard = ranDeck[Math.floor(Math.random()*ranDeck.length)];

       const $firstCard = $("#first-card")
       const $secondCard = $("#second-card")
       const $thirdCard = $("#third-card")
       const $fourthCard = $("#fourth-card")
       const $fifthCard = $("#fifth-card")
       const $sixthCard = $("#sixth-card")

       $firstCard.text(ranDeck[9])
       $secondCard.text(ranDeck[12])
       $thirdCard.text(ranDeck[0])
       $fourthCard.text(ranDeck[5])
       $fifthCard.text(ranDeck[9])
       $sixthCard.text(ranDeck[15])
       setTimeout (() => {
        
        $('#first-card').hide('slow');
        $('#second-card').hide('slow');
        $('#third-card').hide('slow');
        $('#fourth-card').hide('slow');
        $('#fifth-card').hide('slow');
        $('#sixth-card').hide('slow');
        
    }, 5000 );

       

    }

    cardsMatch () {

        if(userCards[0].text() === userCards[1].text()) {
            $('#correct').append('x')
          } else {
            $('#missed').append('x')

          }
          userCards = []
    }

}

const allCards = new Cards();


$(()=> {

$('.card').on('click', (event) => {
 
    $(event.currentTarget).toggleClass('back-of-card')
    

    userCards.push($(event.currentTarget))

        if (userCards.length === 2) {
            
            setTimeout (() => {
                userCards.forEach((element ) => {
                   element.toggleClass('back-of-card')
                })
                allCards.cardsMatch()
                allCards.dealCards()
                $('.card-text').show('slow')
                
            }, 3000);
 
         }
 
  })


  $('#start-Easy').on('click', (event) => {
    $('.card').toggleClass('back-of-card')
    allCards.dealCards()
  
  })

})
