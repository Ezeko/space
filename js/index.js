const div = document.getElementById('welcome')
const prompt = document.getElementById('prompt')

div.innerHTML = 'Hello Welcome to SpaceX'

const initialWallet = 3000

let wallet = 3000;
const trips = [{means: 'falconNine', orbit: 'same', royalty: false},
{means: 'falconOne', orbit: 'different', royalty: false},
{means: 'falconNine', orbit: 'different', royalty: true}
]
const detailTrip = [{trip1: 'Taking the Falcon 9 from Abuja station to the Moon'},
     {trip2: 'Taking the Falcon 1 from the Moon to Spock station on Mars'},
    {trip3: 'Taking the Falcon 9 from Mars to the International Space Station (ISS) in Lower Earth.'}]

let result;
// falcon 9 from Abuja to moon ##earth to earth 100

//falcon 1 from moon to ##mars earth to mars 250btc

//falcon 9 from mars to lower earth ##mars to earth 200 + 500

/* falconOnePriceFromEarthToEarth = 50;
 falconOnePriceFromEarthToMoon = 250;
 landingAtManMade = 200
*/

const deductPrice = array => {
  array.map(data => {
    if (data.means === 'falconOne' && data.orbit === 'same' && data.royalty == false) {
      wallet -= 50
      console.log ('wallet in ' + wallet)
    } else if (data.means === 'falconOne' && data.orbit === 'different' && data.royalty == false) {
      wallet -=250
    } else if (data.means === 'falconNine' && data.orbit === 'different' && data.royalty == false) {
      wallet -=500
    } else if (data.means === 'falconOne' && data.orbit === 'same' && data.royalty == true) {
      wallet -=250
    } else if (data.means === 'falconNine' && data.orbit === 'same' && data.royalty == true) {
      wallet -= 300
    } else if (data.means === 'falconOne' && data.orbit === 'different' && data.royalty == true) {
      wallet -= 450
    } else if (data.means === 'falconNine' && data.orbit === 'different' && data.royalty == true) {
      wallet -= 700
    } else{
      wallet -= 100
    }
    })
    result = {trips: detailTrip, charges: ((initialWallet - wallet) + ' BTC'), walletBalance: (wallet + ' BTC' ), wallet: initialWallet + ' BTC'}

}
deductPrice(trips)
console.log(wallet)
console.log (result)

prompt.innerHTML = 'Initial Balance before Trip: ' + JSON.stringify(result.wallet) +'<br> <br> Trips: '
+ JSON.stringify(result.trips) + '<br> <br> All trips Charges: '
+ JSON.stringify(result.charges) + '<br><br> Wallet Balance After All Trips: '
+ JSON.stringify(result.walletBalance)
