var component;
var bullet;
var enemy;
var i;
var j;
var bulletArray = []; //new Array(100);
var enemyArray = []; //new Array(100);
//var bulletIndex = 0;
//var enemyIndex = 0;

function createBullet(playerX, playerY) {
    component = Qt.createComponent("Bullet.qml");
    bullet = component.createObject(mainWin, { "x": playerX+12, "y": playerY-15 });

    if(bullet === null) {
        console.log("Error creating bullet");
    }

//    bulletModel.append(bullet);
    console.log(bulletArray.unshift(bullet));
//    bulletArray[bulletIndex] = bullet; bulletIndex = (bulletIndex+1)%100;
//    bulletLength++;
}

function spawnEnemy() {
    component = Qt.createComponent("Enemy.qml");
    enemy = component.createObject(mainWin, { "x":  Math.floor(Math.random() * 375) } );

    if(enemy === null) {
        console.log("Error creating enemy");
    }

//    enemyModel.append(enemy);
    enemyArray.unshift(enemy);
//    enemyArray[enemyIndex] = enemy; enemyIndex = (enemyIndex+1)%100;
//    enemyLength++;
}

function checkCollisions() {
//    for(i = 0; i < bulletList.count; i++){
//        for(j = 0; j < enemyList.count; j++){
//            if(bulletList[i].x > enemyList[j].x-5 && bulletList[i].x < enemyList[j].x){
//                bulletModel.remove(bulletList[i]);
//                enemyModel.remove(enemyList[j]);
//            }
//        }
//    }

//    bulletArray.forEach(function(currBullet, i, arrB) {
//        enemyArray.forEach(function(currEnemy, j, arrE) {
//            console.log(bulletArray);
//           if(currBullet.x > (currEnemy.x - 5) && currBullet.x < currEnemy.x){
//               bulletArray.splice(i, 1);
//               enemyArray.splice(j, 1);
//               console.log("USUWAM");
//           }
//        });
//    });
//console.log(bulletArray.length);
    for(i = 0; i < bulletArray.length; i++){
        if(bulletArray[i] === undefined)
            continue;
        for(j = 0; j < enemyArray.length; j++) {
            if(enemyArray[j] === undefined)
                continue;
            if(bulletArray[i].x > (enemyArray[j].x - 5) && bulletArray[i].x < enemyArray[j].x){
                bulletArray.slice(i, 1);
                enemyArray.slice(j, 1);
            }
        }
    }
}
