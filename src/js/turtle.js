export class Turtle {
  constructor(name, weapon, power, speed, recovery) {
    this.name = name;
    this.weapon = weapon;
    this.lives = 3;
    this.score = 0;
    this.health = 6;
    this.power = power;
    this.speed = speed;
    this.recovery = recovery;
    this.attackCount = 0;
  }


  eatPizza() {
    this.health += 1;
  }

  getDumbbell() {
    this.power += 1;
  }

  getShoes() {
    this.speed += 1;
  }

  getEnergyDrink() {
    this.recovery += 1;
  }

  attackTurtle(turtle) {
    this.health -= 1;
    turtle.health -=2;
  }

  powerUp() {
    if (this.score >= 100) {
      this.power += 1;
    }
  }

  attackEnemy() {
    this.score += 10;
    this.attackCount += 1;
    if (this.attackCount === 3) {
      this.power -= 0.5;
      this.speed -= 0.5;
      this.recovery -= 0.5;
      this.attackCount = 0;
    }
  }

  attackBoss() {
    this.score += 15;
    this.attackCount += 1;
    if (this.attackCount === 2) {
      this.power -= 0.5;
      this.speed -= 0.5;
      this.recovery -= 0.5;
      this.attackCount = 0;
    }
  }

  attackedByEnemy() {
    if (this.recovery >= 10) {
      this.health -= 0.5;
    } else {
      this.health -= 1;
    }
  }

  attackedByBoss() {
    if (this.recovery >= 15) {
      this.health -= 1.5;
    } else {
      this.health -= 2;
    }
  }
}
