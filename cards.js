const cards = [
    { name:'bulbasur' , img:'/images/bulbasaur.png'},
    { name:'butterfree' , img:'/images/butterfree.png'},
    { name:'caterpie' , img:'/images/caterpie.png'},
    { name:'chansey' , img:'/images/chansey.png'},
    { name:'charizard' , img:'/images/charizard.png'},
    { name:'charmander' , img:'/images/charmander.png'},
    { name:'charmeleon' , img:'/images/charmeleon.png'},
    { name:'clefairy' , img:'/images/clefairy.png'},
    { name:'cloyster' , img:'/images/cloyster.png'},
    { name:'cubone' , img:'/images/cubone.png'},
     { name:'dewgong' , img:'/images/dewgong.png'},
    { name:'diglett' , img:'/images/diglett.png'},
    { name:'bulbasur' , img:'/images/bulbasaur.png'},
    { name:'butterfree' , img:'/images/butterfree.png'},
    { name:'caterpie' , img:'/images/caterpie.png'},
    { name:'chansey' , img:'/images/chansey.png'},
    { name:'charizard' , img:'/images/charizard.png'},
    { name:'charmander' , img:'/images/charmander.png'},
    { name:'charmeleon' , img:'/images/charmeleon.png'},
    { name:'clefairy' , img:'/images/clefairy.png'},
    { name:'cloyster' , img:'/images/cloyster.png'},
    { name:'cubone' , img:'/images/cubone.png'},
     { name:'dewgong' , img:'/images/dewgong.png'},
    { name:'diglett' , img:'/images/diglett.png'}
    /*{ name:'ditto' , img:'/images/ditto.png'},
    { name:'dodrio-f' , img:'/images/dodrio-f.png'},
    { name:'doduo-f' , img:'/images/doduo-f.png'},
    { name:'doduo' , img:'/images/doduo.png'},
    { name:'dragonair' , img:'/images/dragonair.png'},
    { name:'dragonite' , img:'/images/dragonite.png'},
    { name:'dratini' , img:'/images/dratini.png'},
    { name:'drowzee' , img:'/images/drowzee.png'},
    { name:'dugtrio' , img:'/images/dugtrio.png'},
    { name:'eevee' , img:'/images/eevee.png'},
    { name:'ekans' , img:'/images/ekans.png'},
    { name:'electabuzz' , img:'/images/electabuzz.png'},
    { name:'electrode' , img:'/images/electrode.png'},
    { name:'exeggcute' , img:'/images/exeggcute.png'},
    { name:'exeggutor' , img:'/images/exeggutor.png'},
    { name:'farfetchd' , img:'/images/farfetchd.png'},
    { name:'fearow' , img:'/images/fearow.png'},
    { name:'flareon' , img:'/images/flareon.png'},
    { name:'gastly' , img:'/images/gastly.png'},
    { name:'gengar' , img:'/images/gengar.png'},
    { name:'geodude' , img:'/images/geodude.png'},
    { name:'gloom-f' , img:'/images/gloom-f.png'},
    { name:'golbat-f' , img:'/images/golbat-f.png'},
    { name:'goldeen' , img:'/images/goldeen.png'},
    { name:'golduck' , img:'/images/golduck.png'},
    { name:'golem' , img:'/images/golem.png'},
    { name:'graveler' , img:'/images/graveler.png'},
    { name:'grimer' , img:'/images/grimer.png'},
    { name:'growlithe' , img:'/images/growlithe.png'},
    { name:'gyarados' , img:'/images/gyarados.png'},
    { name:'haunter' , img:'/images/haunter.png'},
    { name:'hitmonchan' , img:'/images/hitmonchan.png'},
    { name:'hitmonlee' , img:'/images/hitmonlee.png'},
    { name:'horsea' , img:'/images/horsea.png'},
    { name:'hypno-f' , img:'/images/hypno-f.png'},
    { name:'ivysaur' , img:'/images/ivysaur.png'},
    { name:'jigglypuff' , img:'/images/jigglypuff.png'},
    { name:'jolteon' , img:'/images/jolteon.png'},
    { name:'jynx' , img:'/images/jynx.png'},
    { name:'kabuto' , img:'/images/kabuto.png'},
    { name:'kabutops' , img:'/images/kabutops.png'},
    { name:'kadabra-f' , img:'/images/kadabra-f.png'},
    { name:'kakuna' , img:'/images/kakuna.png'},
    { name:'kangaskhan' , img:'/images/kangaskhan.png'},
    { name:'kingler' , img:'/images/kingler.png'},
    { name:'koffing' , img:'/images/koffing.png'},
    { name:'krabby' , img:'/images/krabby.png'},
    { name:'lapras' , img:'/images/lapras.png'},
    { name:'lickitung' , img:'/images/lickitung.png'},
    { name:'machamp' , img:'/images/machamp.png'},
    { name:'machoke' , img:'/images/machoke.png'},
    { name:'machop' , img:'/images/machop.png'},
    { name:'magikarp-f' , img:'/images/magikarp-f.png'},
    { name:'magmar' , img:'/images/magmar.png'},
    { name:'magnemite' , img:'/images/magnemite.png'},
    { name:'magneton' , img:'/images/magneton.png'},
    { name:'mankey' , img:'/images/mankey.png'},
    { name:'marowak' , img:'/images/marowak.png'},
    { name:'meowth' , img:'/images/meowth.png'},
    { name:'metapod' , img:'/images/metapod.png'},
    { name:'mew' , img:'/images/mew.png'},
    { name:'mewtwo' , img:'/images/mewtwo.png'},
    { name:'moltres' , img:'/images/moltres.png'},
    { name:'mr-mime' , img:'/images/mr-mime.png'},
    { name:'muk' , img:'/images/muk.png'},
    { name:'nidoqueen' , img:'/images/nidoqueen.png'},
    { name:'nidoran-f' , img:'/images/nidoran-f.png'},
    { name:'nidorina' , img:'/images/nidorina.png'},
    { name:'nidorino' , img:'/images/nidorino.png'},
    { name:'ninetales' , img:'/images/ninetales.png'},
    { name:'oddish' , img:'/images/oddish.png'},
    { name:'omanyte' , img:'/images/omanyte.png'},
    { name:'omastar' , img:'/images/omastar.png'},
    { name:'onix' , img:'/images/onix.png'},
    { name:'paras' , img:'/images/paras.png'},
    { name:'parasect' , img:'/images/parasect.png'},
    { name:'persian' , img:'/images/persian.png'},
    { name:'pidgeot' , img:'/images/pidgeot.png'},
    { name:'pidgeotto' , img:'/images/pidgeotto.png'},
    { name:'pidgey' , img:'/images/pidgey.png'},
    { name:'pikachu' , img:'/images/pikachu.png'},
    { name:'pinsir' , img:'/images/pinsir.png'},
    { name:'poliwag' , img:'/images/poliwag.png'},
    { name:'poliwhirl' , img:'/images/poliwhirl.png'},
    { name:'ponyta' , img:'/images/ponyta.png'},
    { name:'porygon' , img:'/images/porygon.png'},
    { name:'primeape' , img:'/images/primeape.png'},
    { name:'psyduck' , img:'/images/psyduck.png'},
    { name:'raichu' , img:'/images/raichu.png'},
    { name:'rapidash' , img:'/images/rapidash.png'},
    { name:'raticate' , img:'/images/raticate.png'},
    { name:'rattata' , img:'/images/rattata.png'},
    { name:'rhydon-f' , img:'/images/rhydon-f.png'},
    { name:'rhyhorn-f' , img:'/images/rhyhorn-f.png'},
    { name:'sandshrew' , img:'/images/sandshrew.png'},
    { name:'sandslash' , img:'/images/sandslash.png'},
    { name:'scyther-f' , img:'/images/scyther-f.png'},
    { name:'seadra' , img:'/images/seadra.png'},
    { name:'seaking-f' , img:'/images/seaking-f.png'},
    { name:'seel' , img:'/images/seel.png'},
    { name:'shellder' , img:'/images/shellder.png'},
    { name:'slowbro' , img:'/images/slowbro.png'},
    { name:'slowpoke' , img:'/images/slowpoke.png'},
    { name:'snorlax' , img:'/images/snorlax.png'},
    { name:'spearow' , img:'/images/spearow.png'},
    { name:'squirtle' , img:'/images/squirtle.png'},
    { name:'starmie' , img:'/images/starmie.png'},
    { name:'staryu' , img:'/images/staryu.png'},
    { name:'tangela' , img:'/images/tangela.png'},
    { name:'tauros' , img:'/images/tauros.png'},
    { name:'tentacool' , img:'/images/tentacool.png'},
    { name:'tentacruel' , img:'/images/tentacruel.png'},
    { name:'vaporeon' , img:'/images/vaporeon.png'},
    { name:'venomoth' , img:'/images/venomoth.png'},
    { name:'venonat' , img:'/images/venonat.png'},
    { name:'venusaur' , img:'/images/venusaur.png'},
    { name:'victreebel' , img:'/images/victreebel.png'},
    { name:'vileplume' , img:'/images/vileplume.png'},
    { name:'voltorb' , img:'/images/voltorb.png'},
    { name:'vulpix' , img:'/images/vulpix.png'},
    { name:'wartortle' , img:'/images/wartortle.png'},
    { name:'weedle' , img:'/images/weedle.png'},
    { name:'weepinbell' , img:'/images/weepinbell.png'},
    { name:'weezing' , img:'/images/weezing.png'},
    { name:'wigglytuff' , img:'/images/wigglytuff.png'},
    { name:'zapdos' , img:'/images/zapdos.png'},
    { name:'zubat-f' , img:'/images/zubat-f.png'} */
       
];

const memoryGame = new MemoryGame(cards);
class MemoryGame {
    constructor(game,card){
        this.card = card
        this.chooseCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        this.mixCards();
    }
    mixCards(){

    }
    checkPair(card1,card2){
        
        if(card1 === card2){
            this.pairsClicked++;
            this.pairsGuessed++ ;
            this.quantityPairFound();
            return true;
        }
        else{
            this.pairsClicked++;
            return false
        }

    }
    quantityPairFound(){
       

    }
}

let hasFlippedCard = false;
let firstCard ,secondCard;

function flipCards(){
if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this ;
}
else{
    hasFlippedCard = false;
    secondCard = this;
}
}
cards.forEach(card => card.addEventListener('click',flipCards));