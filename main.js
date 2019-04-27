const gs = {};


function preload() {

};

function create() {
  gs.colors = {
    red: 0xff0000,
    orange: 0xffc700,
    yellow: 0xf6ff00,
    green: 0x6eff00,
    blue: 0x00ffd0,
    purple: 0x7b00ff,
    pink: 0xff00e5,
  };
  gs.colorArray = [0xff0000, 0xffc700, 0xf6ff00, 0x6eff00, 0x00ffd0, 0x7b00ff, 0xff00e5];
  gs.getColor = () => {
    return gs.colorArray[Math.floor(Math.random() * 6)];
  }
  gs.slot1 = this.add.rectangle(100, 100, 120, 120, gs.getColor());
  gs.slot2 = this.add.rectangle(300, 100, 120, 120, gs.getColor());
  gs.slot3 = this.add.rectangle(500, 100, 120, 120, gs.getColor());
  gs.navBar = this.add.rectangle(300, 550, 580, 80, 0xffffff);
  gs.firstMachine = this.add.rectangle(84, 550, 88, 60, 0x000000);
  gs.firstMachine.setInteractive();
  gs.secondMachine = this.add.rectangle(192, 550, 88, 60, 0x000000);
  gs.secondMachine.setInteractive();
  gs.thirdMachine = this.add.rectangle(300, 550, 88, 60, 0x000000);
  gs.thirdMachine.setInteractive();
  gs.fourthMachine = this.add.rectangle(408, 550, 88, 60, 0x000000);
  gs.fourthMachine.setInteractive();
  gs.fifthMachine = this.add.rectangle(516, 550, 88, 60, 0x000000);
  gs.fifthMachine.setInteractive();
  gs.spinButton = this.add.rectangle(300, 300, 60, 60, 0xffffff);
  gs.spinButton.setInteractive();
  gs.tokens = 10;
  gs.machines = {
    one: {
      spin() {
        let cost = 1;
        let canSpin = false;
        if (gs.tokens - cost >= 0) {
          canSpin = true;
        } else {
          canSpin = false;
        }
        if (canSpin === true) {
          gs.slot1.fillColor = gs.getColor();
          gs.slot2.fillColor = gs.getColor();
          gs.slot3.fillColor = gs.getColor();
          if (gs.slot1.fillColor === gs.slot2.fillColor && gs.slot2.fillColor === gs.slot3.fillColor) {
            console.log('grand prize');
            gs.tokens += 100;
          } else if (gs.slot1.fillColor === gs.slot2.fillColor || gs.slot2.fillColor === gs.slot3.fillColor || gs.slot3.fillColor === gs.slot1.fillColor) {
            console.log('small prize');
            gs.tokens += 10;
          } else {
            console.log('no prize');
          }
        } else {
          console.log('not enough tokens to spin');
        }
      }
    },
    two: {
      spin() {
        let cost = 10;
        let canSpin = false;
        if (gs.tokens - cost >= 0) {
          canSpin = true;
        } else {
          canSpin = false;
        }
        if (canSpin === true) {
          gs.slot1.fillColor = gs.getColor();
          gs.slot2.fillColor = gs.getColor();
          gs.slot3.fillColor = gs.getColor();
          if (gs.slot1.fillColor === gs.slot2.fillColor && gs.slot2.fillColor === gs.slot3.fillColor) {
            console.log('grand prize');
            gs.tokens += 1000;
          } else if (gs.slot1.fillColor === gs.slot2.fillColor || gs.slot2.fillColor === gs.slot3.fillColor || gs.slot3.fillColor === gs.slot1.fillColor) {
            console.log('small prize');
            gs.tokens += 100;
          } else {
            console.log('no prize');
          }
        } else {
          console.log('not enough tokens to spin');
        }
      }
    },
    three: {
      spin() {
        let cost = 100;
        let canSpin = false;
        if (gs.tokens - cost >= 0) {
          canSpin = true;
        } else {
          canSpin = false;
        }
        if (canSpin === true) {
          gs.slot1.fillColor = gs.getColor();
          gs.slot2.fillColor = gs.getColor();
          gs.slot3.fillColor = gs.getColor();
          if (gs.slot1.fillColor === gs.slot2.fillColor && gs.slot2.fillColor === gs.slot3.fillColor) {
            console.log('grand prize');
            gs.tokens += 10000;
          } else if (gs.slot1.fillColor === gs.slot2.fillColor || gs.slot2.fillColor === gs.slot3.fillColor || gs.slot3.fillColor === gs.slot1.fillColor) {
            console.log('small prize');
            gs.tokens += 1000;
          } else {
            console.log('no prize');
          }
        } else {
          console.log('not enough tokens to spin');
        }
      }
    },
    four: {
      spin() {
        let cost = 1000;
        let canSpin = false;
        if (gs.tokens - cost >= 0) {
          canSpin = true;
        } else {
          canSpin = false;
        }
        if (canSpin === true) {
          gs.slot1.fillColor = gs.getColor();
          gs.slot2.fillColor = gs.getColor();
          gs.slot3.fillColor = gs.getColor();
          if (gs.slot1.fillColor === gs.slot2.fillColor && gs.slot2.fillColor === gs.slot3.fillColor) {
            console.log('grand prize');
            gs.tokens += 100000;
          } else if (gs.slot1.fillColor === gs.slot2.fillColor || gs.slot2.fillColor === gs.slot3.fillColor || gs.slot3.fillColor === gs.slot1.fillColor) {
            console.log('small prize');
            gs.tokens += 10000;
          } else {
            console.log('no prize');
          }
        } else {
          console.log('not enough tokens to spin');
        }
      }
    },
    five: {
      spin() {
        let cost = 10000;
        let canSpin = false;
        if (gs.tokens - cost >= 0) {
          canSpin = true;
        } else {
          canSpin = false;
        }
        if (canSpin === true) {
          gs.slot1.fillColor = gs.getColor();
          gs.slot2.fillColor = gs.getColor();
          gs.slot3.fillColor = gs.getColor();
          if (gs.slot1.fillColor === gs.slot2.fillColor && gs.slot2.fillColor === gs.slot3.fillColor) {
            console.log('grand prize');
            gs.tokens += 1000000;
          } else if (gs.slot1.fillColor === gs.slot2.fillColor || gs.slot2.fillColor === gs.slot3.fillColor || gs.slot3.fillColor === gs.slot1.fillColor) {
            console.log('small prize');
            gs.tokens += 100000;
          } else {
            console.log('no prize');
          }
        } else {
          console.log('not enough tokens to spin');
        }
      }
    }
  }
  gs.currentMachine = gs.machines.one;
  gs.firstMachine.on('pointerup', function() {
    gs.currentMachine = gs.machines.one;
  })
  gs.secondMachine.on('pointerup', function() {
    gs.currentMachine = gs.machines.two;
  })
  gs.thirdMachine.on('pointerup', function() {
    gs.currentMachine = gs.machines.three;
  })
  gs.fourthMachine.on('pointerup', function() {
    gs.currentMachine = gs.machines.four;
  })
  gs.fifthMachine.on('pointerup', function() {
    gs.currentMachine = gs.machines.five;
  })
  gs.spinButton.on('pointerup', function() {
    gs.currentMachine.spin();
  })
}


function update() {

}


const config = {
  width: 600,
  height: 600,
  backgroundColor: '#000000',
  scene: {
    preload,
    create,
    update
  }
};


const game = new Phaser.Game(config);