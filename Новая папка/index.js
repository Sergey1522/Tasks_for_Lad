// Import stylesheets
import './style.css';

const monster = {
  maxHealth: 10,
  name: 'Лютый',
  moves: [
    {
      name: 'Удар когтистой лапой',
      physicalDmg: 3, // физический урон
      magicDmg: 0, // магический урон
      physicArmorPercents: 20, // физическая броня
      magicArmorPercents: 20, // магическая броня
      cooldown: 0, // ходов на восстановление
    },
    {
      name: 'Огненное дыхание',
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: 'Удар хвостом',
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2,
    },
  ],
};

const battlemage = {
  name: 'Evstafiy',
  maxHealth: 10,
  moves: [
    {
      name: 'Удар боевым кадилом',
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0,
    },
    {
      name: 'Вертушка левой пяткой',
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4,
    },
    {
      name: 'Каноничный фаербол',
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: 'Магический блок',
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4,
    },
  ],
};
const chekbattlemage = document.querySelector('#number');
const go = document.querySelector('.btn_health');
const moveRondomMonster = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startHealth = function () {
  const mage = document.querySelector('.healthBattlemage');
  const monst = document.querySelector('.healthMonster');
  let health;
  health = document.querySelector('#go').value;
  health = parseInt(health);

  battlemage.maxHealth = health;
  monster.maxHealth = health;

  // const healthMage = document.createElement('h2');
  // healthMage.innerHTML = `Моё здоровье : ${battlemage.maxHealth}`;
  mage.innerHTML = battlemage.maxHealth;

  // const monster = document.querySelector(".monster");
  // const healthMonster = document.createElement('h2');
  // healthMonster.innerHTML = `Здоровье Лютого : ${monster.maxHealth}`;
  monst.innerHTML = monster.maxHealth;
  console.log(monster.maxHealth);
  console.log(battlemage.maxHealth);
};
console.log(monster);
console.log(battlemage);
go.addEventListener('click', () => {
  startHealth();
  document.querySelector('#go').value = '';
  console.log('click');
});
const move = document.querySelector('.move');

const playGame = function () {
  console.log(monster.maxHealth);
  console.log(battlemage.maxHealth);
  let num;

  let cooldownMonster_1 = 0;
  let cooldownMonster_2 = 0;
  let cooldownBattlemage_1 = 0;
  let cooldownBattlemage_2 = 0;
  let cooldownBattlemage_3 = 0;

  // console.log("Начальное здоровье равно 10. Хотите изменить?\n1. Да\n2. Нет");
  // num = readlineSync.question(" : ");
  // num = parseInt(num);
  // console.log(num);
  // if (num === 1) {
  //   console.log("Какое здоровье вы хотите?");
  //   health = readlineSync.question("--> ");
  //   health = parseInt(health);

  //   monster.maxHealth = health;
  //   battlemage.maxHealth = health;
  //   console.log(health);
  // }
  // health = document.querySelector('#go').value;
  // monster.maxHealth = health;
  // battlemage.maxHealth = health;

  console.log(monster.maxHealth);
  console.log(battlemage.maxHealth);

  // move.addEventListener('click', chekMoveMonster);

  while (monster.maxHealth > 0 && battlemage.maxHealth > 0) {
    let numRondomMonster;
    let numRondomBattlemage;
    console.log('111');

    do {
      numRondomMonster = moveRondomMonster(0, 2);
      console.log(numRondomMonster);
    } while (
      (numRondomMonster === 1 &&
        cooldownMonster_1 > 0 &&
        cooldownMonster_1 < 3) ||
      (numRondomMonster === 2 && cooldownMonster_2 > 0 && cooldownMonster_2 < 2)
    );

    if (cooldownMonster_1 > 0 && cooldownMonster_1 < 3) {
      console.log('111');
      cooldownMonster_1++;
      console.log(cooldownMonster_1);
    } else if (cooldownMonster_1 === 3) {
      cooldownMonster_1 = 0;
    }
    if (cooldownMonster_2 > 0 && cooldownMonster_2 < 2) {
      cooldownMonster_2++;
    } else if (cooldownMonster_2 === 2) {
      cooldownMonster_2 = 0;
    }
    switch (numRondomMonster) {
      case 1:
        if (cooldownMonster_1 === 0) {
          cooldownMonster_1++;
        }
        break;
      case 2:
        if (cooldownMonster_2 === 0) {
          cooldownMonster_2++;
        }
        break;
      default:
        break;
    }
    const stepMonster = document.querySelector('.moveMonster_step');
    stepMonster.innerHTML =
      'Действие лютого:  ' + monster.moves[numRondomMonster].name;

    // console.log('Действие лютого:  ' + monster.moves[numRondomMonster].name);
    console.log(
      '\nВыберите действие:\n1. Удар боевым кадилом;\n2. Вертушка левой пяткой;\n3. Каноничный фаербол;\n4. Магический блок.'
    );
    // numRondomBattlemage = readlineSync.question("--> ");

    if (numRondomBattlemage == undefined) {
      console.log('111');
      const span = document.querySelector('.error');
      // const error = document.createElement('h3');
      span.innerHTML = 'Ваш Ход!';
      // span.append(error);
    } else if (numRondomBattlemage === '') {
      numRondomBattlemage = document.querySelector('#number').value;
      numRondomBattlemage = parseInt(numRondomBattlemage);
      console.log(numRondomBattlemage);

      while (
        (numRondomBattlemage === 2 &&
          cooldownBattlemage_1 > 0 &&
          cooldownBattlemage_1 < 4) ||
        (numRondomBattlemage === 3 &&
          cooldownBattlemage_2 > 0 &&
          cooldownBattlemage_2 < 3) ||
        (numRondomBattlemage === 4 &&
          cooldownBattlemage_3 > 0 &&
          cooldownBattlemage_3 < 4)
      ) {
        console.log('Это действие недоступно, выберите другое!');
        // numRondomBattlemage = readlineSync.question("--> ");
        numRondomBattlemage = parseInt(numRondomBattlemage);
      }

      if (cooldownBattlemage_1 > 0 && cooldownBattlemage_1 < 4) {
        console.log('111');
        cooldownBattlemage_1++;
      } else if (cooldownBattlemage_1 === 4) {
        console.log('111');
        cooldownBattlemage_1 = 0;
      }
      if (cooldownBattlemage_2 > 0 && cooldownBattlemage_2 < 3) {
        cooldownBattlemage_2++;
      } else if (cooldownBattlemage_2 === 3) {
        console.log('222');
        cooldownBattlemage_2 = 0;
      }
      if (cooldownBattlemage_3 > 0 && cooldownBattlemage_3 < 4) {
        cooldownBattlemage_3++;
      } else if (cooldownBattlemage_3 === 4) {
        console.log('333');
        cooldownBattlemage_3 = 0;
      }
      switch (numRondomBattlemage - 1) {
        case 1:
          if (cooldownBattlemage_1 === 0) {
            console.log(cooldownBattlemage_1);
            cooldownBattlemage_1++;
          }
          break;
        case 2:
          if (cooldownBattlemage_2 === 0) {
            cooldownBattlemage_2++;
          }
          break;
        case 3:
          if (cooldownBattlemage_3 === 0) {
            cooldownBattlemage_3++;
          }
          break;
        default:
          break;
      }
    }
    battlemage.maxHealth =
      battlemage.maxHealth -
      (monster.moves[numRondomMonster].physicalDmg -
        (battlemage.moves[numRondomBattlemage - 1].physicArmorPercents / 100) *
          monster.moves[numRondomMonster].physicalDmg) -
      (monster.moves[numRondomMonster].magicDmg -
        (battlemage.moves[numRondomBattlemage - 1].magicArmorPercents / 100) *
          monster.moves[numRondomMonster].magicDmg);
    monster.maxHealth =
      monster.maxHealth -
      (battlemage.moves[numRondomBattlemage - 1].physicalDmg -
        (monster.moves[numRondomMonster].physicArmorPercents / 100) *
          battlemage.moves[numRondomBattlemage - 1].physicalDmg) -
      (battlemage.moves[numRondomBattlemage - 1].magicDmg -
        (monster.moves[numRondomMonster].magicArmorPercents / 100) *
          battlemage.moves[numRondomBattlemage - 1].magicDmg);

    if (battlemage.maxHealth > 0) {
      console.log('\nВаше здоровье: ' + battlemage.maxHealth.toFixed(1));
    }
    if (monster.maxHealth > 0) {
      console.log('Здоровье Лютого: ' + monster.maxHealth.toFixed(1));
    }
  }

  // numRondomBattlemage = parseInt(numRondomBattlemage);
  // console.log(numRondomBattlemage);

  // while (
  //   (numRondomBattlemage === 2 &&
  //     cooldownBattlemage_1 > 0 &&
  //     cooldownBattlemage_1 < 4) ||
  //   (numRondomBattlemage === 3 &&
  //     cooldownBattlemage_2 > 0 &&
  //     cooldownBattlemage_2 < 3) ||
  //   (numRondomBattlemage === 4 &&
  //     cooldownBattlemage_3 > 0 &&
  //     cooldownBattlemage_3 < 4)
  // ) {
  //   console.log('Это действие недоступно, выберите другое!');
  //   // numRondomBattlemage = readlineSync.question("--> ");
  //   numRondomBattlemage = parseInt(numRondomBattlemage);
  // }

  // if (cooldownBattlemage_1 > 0 && cooldownBattlemage_1 < 4) {
  //   console.log('111');
  //   cooldownBattlemage_1++;
  // } else if (cooldownBattlemage_1 === 4) {
  //   console.log('111');
  //   cooldownBattlemage_1 = 0;
  // }
  // if (cooldownBattlemage_2 > 0 && cooldownBattlemage_2 < 3) {
  //   cooldownBattlemage_2++;
  // } else if (cooldownBattlemage_2 === 3) {
  //   console.log('222');
  //   cooldownBattlemage_2 = 0;
  // }
  // if (cooldownBattlemage_3 > 0 && cooldownBattlemage_3 < 4) {
  //   cooldownBattlemage_3++;
  // } else if (cooldownBattlemage_3 === 4) {
  //   console.log('333');
  //   cooldownBattlemage_3 = 0;
  // }
  // switch (numRondomBattlemage - 1) {
  //   case 1:
  //     if (cooldownBattlemage_1 === 0) {
  //       console.log(cooldownBattlemage_1);
  //       cooldownBattlemage_1++;
  //     }
  //     break;
  //   case 2:
  //     if (cooldownBattlemage_2 === 0) {
  //       cooldownBattlemage_2++;
  //     }
  //     break;
  //   case 3:
  //     if (cooldownBattlemage_3 === 0) {
  //       cooldownBattlemage_3++;
  //     }
  //     break;
  //   default:
  //     break;
  // }

  //   battlemage.maxHealth =
  //     battlemage.maxHealth -
  //     (monster.moves[numRondomMonster].physicalDmg -
  //       (battlemage.moves[numRondomBattlemage - 1].physicArmorPercents / 100) *
  //         monster.moves[numRondomMonster].physicalDmg) -
  //     (monster.moves[numRondomMonster].magicDmg -
  //       (battlemage.moves[numRondomBattlemage - 1].magicArmorPercents / 100) *
  //         monster.moves[numRondomMonster].magicDmg);
  //   monster.maxHealth =
  //     monster.maxHealth -
  //     (battlemage.moves[numRondomBattlemage - 1].physicalDmg -
  //       (monster.moves[numRondomMonster].physicArmorPercents / 100) *
  //         battlemage.moves[numRondomBattlemage - 1].physicalDmg) -
  //     (battlemage.moves[numRondomBattlemage - 1].magicDmg -
  //       (monster.moves[numRondomMonster].magicArmorPercents / 100) *
  //         battlemage.moves[numRondomBattlemage - 1].magicDmg);

  //   if (battlemage.maxHealth > 0) {
  //     console.log('\nВаше здоровье: ' + battlemage.maxHealth.toFixed(1));
  //   }
  //   if (monster.maxHealth > 0) {
  //     console.log('Здоровье Лютого: ' + monster.maxHealth.toFixed(1));
  //   }
  // }

  if (monster.maxHealth > battlemage.maxHealth) {
    console.log('Loose!');
  } else {
    console.log('Win!');
  }
};

// console.log(monster.maxHealth);
// console.log(battlemage.maxHealth);
// console.log(battlemage);

// playGame();
move.addEventListener('click', playGame);
