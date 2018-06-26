/**
 * Created by Ivaylo on 5/26/2018.
 */

let result = (function() {
    const Suits = {
        CLUBS: "\u2663",    // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665",   // ♥
        SPADES: "\u2660"    // ♠
    };

    const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    class Card {
        constructor(face, suit){
            this.suit = suit;
            this.face = face;
        }

        set suit(s){
            if(!Object.keys(Suits).map(k => Suits[k]).includes(s)){
                throw new Error;
            }
            this._suit = s;
        }

        set face(f){
            if(!Faces.includes(f)){
                throw new Error;
            }
            this._face = f;
        }

        get suit(){
            return this._suit;
        }

        get face() {
            return this._face;
        }

        toString(){
            return this._face + this._suit;
        }
    }
    return { Suits, Card }
}());

let card = new result.Card("Q", result.Suits.CLUBS);
console.log(card.toString());