var component;
var bullet;
var explosion;
var enemy;
var i;
var j;

function createBullet(playerX, playerY) {
    component = Qt.createComponent("Bullet.qml");
    bullet = component.createObject(mainWin, { "x": playerX+12, "y": playerY-15 });

    if(bullet === null) {
        console.log("Error creating bullet");
    }

    bulletList.push(bullet);
}

function spawnEnemy() {
    component = Qt.createComponent("Enemy.qml");
    enemy = component.createObject(mainWin, { "x":  Math.floor(Math.random() * (mainWin.width - 25)) } );

    if(enemy === null) {
        console.log("Error creating enemy");
    }

    enemyList.push(enemy);
}

function checkCollisions() {

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
                component = Qt.createComponent("Explosion.qml");
                explosion = component.createObject(mainWin, { "x": enemyList[j].x-12, "y": enemyList[j].y-12 });

                score++;
                bulletList[i].destroy();
                enemyList[j].destroy();
                bulletList.slice(i, 1);
                enemyList.slice(j, 1);

            }
        }
    }
}

function checkPlayerCollisions(playerX, playerY){
    for(j = 0; j < enemyList.length; j++){
        if(enemyList[j] === undefined){
            continue;
        }

        if(enemyList[j].x > (playerX - 25) && enemyList[j].x < (playerX + 25)
                && enemyList[j].y > (playerY - 25) && enemyList[j].y < (playerY + 25)){
            component = Qt.createComponent("Explosion.qml");
            explosion = component.createObject(mainWin, { "x": enemyList[j].x-12, "y": enemyList[j].y-12 });

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
