let $startKitty = document.querySelector('.startKitty')
let $startPag = document.querySelector('.startPag')

let $fotoCat = document.querySelector('.fa-cat')
let $fotoDog = document.querySelector('.fa-dog')

let $eatBtn = document.querySelector('.eatButton')
let $runBtn = document.querySelector('.runButton')
let $washBtn = document.querySelector('.washButton')
let $bars = document.querySelectorAll('.bars__progres');
let $point = document.querySelector('.pointTittle')



class Tamagochi {
    constructor(food, clean, hapiness) {
        this.food = food;
        this.clean = clean;
        this.hapiness = hapiness;
        this.point = 0;
        this.paddingLeft = 0;
        this.moveBars()
    }

    eat() {
        this.food += 30;
        this.clean -= 20;
        this.moveBars()
    }

    wash() {
        this.hapiness -= 20;
        this.clean += 40;
        this.moveBars()

    }

    run() {
        this.hapiness += 15;
        this.food -= 10;
        this.moveBars()
    }

    moveBars() {
        let barsItem = [this.food, this.clean, this.hapiness]

        $bars.forEach((el, i) => {
            if (barsItem[i] <= 1) {
                this.gameOver()
            }
            el.style.width = barsItem[i] + '%'
        })
    }

    setInt(point) {
        setInterval(() => {
            this.food -= point;
            this.clean -= point;
            this.hapiness -= point;
            this.moveBars()
            this.setPoint()
        }, 5000)
    }

    displayNone() {
        $fotoCat.style.fontSize = '0px'
        $fotoDog.style.fontSize = '0px'
    }

    displayHeroes(tag) {
        tag.style.fontSize = '40px'
    }

    gameOver() {
        alert('You are lose!')
        document.location.reload(true);
    }

    setPoint() {
        this.point++
        $point.innerText = this.point == 1 ? this.point + ' year' : this.point + ' years'
    }

    heroesMove(tag) {
        setInterval(() => {
            if (this.paddingLeft > 160) {
                this.paddingLeft = 0;
            }
            tag.style.paddingLeft = this.paddingLeft + 'px'
            this.paddingLeft += 40
        }, 2000)
    }

}


class LazyPug extends Tamagochi {
    constructor(food, clean, hapiness) {
        super()
        this.food = food;
        this.clean = clean;
        this.hapiness = hapiness;
        this.displayNone()
        this.displayHeroes($fotoDog)
        this.setInt(5)
        this.moveBars()
        this.heroesMove($fotoDog)
    }

}

class FluffyKitty extends Tamagochi {
    constructor(food, clean, hapiness) {
        super()
        this.food = food;
        this.clean = clean;
        this.hapiness = hapiness;
        this.displayNone()
        this.displayHeroes($fotoCat)
        this.setInt(3)
        this.moveBars()
        this.heroesMove($fotoCat)
    }

}

const startKitty = () => Math.round(50 + Math.random() * 50)
const startPug = () => Math.round(50 + Math.random() * 20)

let newTam;
$startKitty.addEventListener('click', () => {
    newTam = new FluffyKitty(startKitty(), startKitty(), startKitty())
})

$startPag.addEventListener('click',
    () => newTam = new LazyPug(startPug(), startPug(), startPug()))



$eatBtn.addEventListener('click', () => newTam.eat())
$runBtn.addEventListener('click', () => newTam.run())
$washBtn.addEventListener('click', () => newTam.wash())