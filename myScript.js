var component;
var bullet;
var enemy;
var i;
var j;

function createBullet(playerX, playerY) {
    component = Qt.createComponent("Bullet.qml");
    bullet = component.createObject(mainWin, { "x": playerX+12, "y": playerY-15 });

    if(bullet === null) {
        console.log("Error creating bullet");
    }

//    bulletArray.push(bullet);
    bulletList.push(bullet);
//    bulletList.unshift(bullet);
//    bulletArray.unshift(bullet));
//    bulletArray[bulletIndex] = bullet; bulletIndex = (bulletIndex+1)%100;
//    bulletLength++;
//    bulletModel.append(bullet);
}

function spawnEnemy() {
    component = Qt.createComponent("Enemy.qml");
    enemy = component.createObject(mainWin, { "x":  Math.floor(Math.random() * (mainWin.width - 25)) } );

    if(enemy === null) {
        console.log("Error creating enemy");
    }

//    enemyArray.push(enemy);
    enemyList.push(enemy);
//    enemyList.unshift(enemy);
//    enemyArray.unshift(enemy);
//    enemyArray[enemyIndex] = enemy; enemyIndex = (enemyIndex+1)%100;
//    enemyLength++;
//    enemyModel.append(enemy);
}

function checkCollisions() {

//    console.log(enemyList.length);
//    console.log(enemyList[0].y);

    for(i = 0; i < bulletList.length; i++){
        if(bulletList[i] === undefined){
            continue;
        }

        for(j = 0; j < enemyList.length; j++){
            if(enemyList[j] === undefined){
                continue;
            }

            if(bulletList[i].x > (enemyList[j].x - 5) && bulletList[i].x < (enemyList[j].x + 25)
                    && bulletList[i].y < (enemyList[j].y + 25)){
//                console.log("COLLISION");
                score++;
                bulletList[i].destroy();
                enemyList[j].destroy();
                bulletList.slice(i, 1);
                enemyList.slice(j, 1);
            }
        }
    }
}

function checkEnemyCollisions(playerX, playerY){
    for(j = 0; j < enemyList.length; j++){
        if(enemyList[j] === undefined){
            continue;
        }

        if(enemyList[j].x > (playerX - 25) && enemyList[j].x < (playerX + 25)
                && enemyList[j].y > (playerY - 25) && enemyList[j].y < (playerY + 25)){
//            console.log("PLAYER COLLISION");
            lives--;
            enemyList[j].destroy();
            enemyList.slice(j, 1);
            if(lives <= 0){
                close();
            }
        }
    }
}

function removeBullet(bulletX, bulletY){
    for(i = 0; i < bulletList.length; i++){
        if(bulletList[i] === undefined){
            continue;
        }

        if(bulletList[i].x === bulletX && bulletList[i].y === bulletY){
            bulletList[i].destroy();
            bulletList.slice(i, 1);
        }
    }
}

function removeEnemy(enemyX, enemyY){
    for(i = 0; i < enemyList.length; i++){
        if(enemyList[i] === undefined){
            continue;
        }

        if(enemyList[i].x === enemyX && enemyList[i].y === enemyY){
            enemyList[i].destroy();
            enemyList.slice(i, 1);
            lives--;
        }

        if(lives <= 0){
            close();
        }
    }
}
