let $startKitty = document.querySelector('.startKitty')
let $startPag = document.querySelector('.startPag')
let $startNinja = document.querySelector('.startNinja')


let $fotoCat = document.querySelector('.fa-cat')
let $fotoDog = document.querySelector('.fa-dog')
let $fotoNinja = document.querySelector('.fa-user-ninja')

let $eatBtn = document.querySelector('.eatButton')
let $runBtn = document.querySelector('.runButton')
let $washBtn = document.querySelector('.washButton')
let $doctorBtn = document.querySelector('.doctorButton')
let $barBtn = document.querySelector('.barButton')
let $workBtn = document.querySelector('.workButton')
let $shopBtn = document.querySelector('.shopButton')
let $businessBtn = document.querySelector('.businessButton')

let $bars = document.querySelectorAll('.bars__progres');
let $point = document.querySelector('.pointTittle')
let $barsMain = document.querySelector('.bars')

let $startBtn = document.querySelector('.startBtn')
let $restartBtn = document.querySelector('.restart')




const startKitty = () => Math.round(50 + Math.random() * 50)
const startPug = () => Math.round(50 + Math.random() * 20)

class Tamagochi {
    constructor() {
        this.point = 0;
        this.paddingLeft = 0;
        this.paddingTop = 5;
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

    goDoctor() {
        this.health += 30;
        this.money -= 20;
        this.moveBars()
    }


    goBar() {
        this.socialization += 40;
        this.food += 10
        this.money -= 20
        this.health -= 10
        this.moveBars()
    }

    goWork() {
        this.money += 50;
        this.food -= 10;
        this.health -= 10;
        this.socialization -= 20;
        this.moveBars()
    }

    byFood() {
        this.food += 20
        this.money -= 20;
        this.moveBars()
    }

    startBusiness() {
        this.money += 100;
        this.health -= 100;
        this.hapiness += 100;
        this.socialization += 20;
        this.moveBars()
    }

    moveBars() {
        this.barsItem = [this.food, this.clean, this.hapiness, this.health, this.socialization, this.money]

        $bars.forEach((el, i) => {
            if (this.barsItem[i] <= 1) {
                this.gameOver()
            }
            if (this.barsItem[i] > 70) {
                el.style.backgroundColor = 'green'
            }
            if (this.barsItem[i] < 70) {
                el.style.backgroundColor = 'rgba(238, 209, 32, 0.9)'
            }
            if (this.barsItem[i] < 30) {
                el.style.backgroundColor = 'rgb(212,0,0)'
            }
            el.style.width = this.barsItem[i] + '%'
        })
    }

    setInt(point, time) {
        setInterval(() => {
            this.food -= point;
            this.clean -= point;
            this.hapiness -= point;
            this.health -= point;
            this.socialization -= point;
            this.money -= point;
            this.moveBars()
        }, time * 1000)
    }

    setHelpInterval() {
        setInterval(() => {
            /// Написать код
            this.moveBars()
        }, 60000)
    }

    displayNone() {
        $fotoCat.style.fontSize = '0px'
        $fotoDog.style.fontSize = '0px'
    }

    displayHeroes(tag) {
        tag.style.fontSize = '65px'
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
            if (this.paddingTop > 45) {
                this.paddingTop = 5;
            }
            tag.style.paddingLeft = this.paddingLeft + 'px'
            tag.style.paddingTop = this.paddingTop + 'px'
            this.paddingLeft += 40
            this.paddingTop += 40
            this.setPoint()
        }, 2000)
    }

}


class LazyPug extends Tamagochi {
    constructor(fn) {
        super()
        this.food = fn();
        this.clean = fn();
        this.hapiness = fn();
        this.health = fn();
        this.socialization = fn();
        this.money = fn();
        this.displayNone()
        this.displayHeroes($fotoDog)
        this.setInt(5, 5)
        this.setHelpInterval()
        this.moveBars()
        this.heroesMove($fotoDog)
    }

}

class FluffyKitty extends Tamagochi {
    constructor(fn) {
        super()
        this.food = fn();
        this.clean = fn();
        this.hapiness = fn();
        this.health = fn();
        this.socialization = fn();
        this.money = fn();
        this.displayNone()
        this.displayHeroes($fotoCat)
        this.setInt(3, 5)
        this.setHelpInterval()
        this.moveBars()
        this.heroesMove($fotoCat)
    }

}


class Ninja extends Tamagochi {
    constructor(fn) {
        super()
        this.food = fn();
        this.clean = fn();
        this.hapiness = fn();
        this.health = fn();
        this.socialization = fn();
        this.money = fn();
        this.displayNone()
        this.displayHeroes($fotoNinja)
        this.setInt(7, 7)
        this.setHelpInterval()
        this.moveBars()
        this.heroesMove($fotoNinja)
    }

}




let newTam;
$startKitty.addEventListener('click', () => {
    newTam = new FluffyKitty(startKitty)
    $startBtn.style.display = 'none';
    $restartBtn.style.display = 'block';



})

$startPag.addEventListener('click', () => {
    new LazyPug(startPug)
    $startBtn.style.display = 'none';
    $restartBtn.style.display = 'block';
})


$startNinja.addEventListener('click', () => {
    newTam = new Ninja(startPug)
    $startBtn.style.display = 'none';
    $restartBtn.style.display = 'block';
})

$restartBtn.addEventListener('click', () => {
    document.location.reload(true);
    $startBtn.style.display = 'none';
    $restartBtn.style.display = 'block';
})



$eatBtn.addEventListener('click', () => newTam.eat())
$runBtn.addEventListener('click', () => newTam.run())
$washBtn.addEventListener('click', () => newTam.wash())
$doctorBtn.addEventListener('click', () => newTam.goDoctor())
$barBtn.addEventListener('click', () => newTam.goBar())
$workBtn.addEventListener('click', () => newTam.goWork())
$shopBtn.addEventListener('click', () => newTam.byFood())
$businessBtn.addEventListener('click', () => newTam.startBusiness())