import QtQuick 2.0

Image {
    id: enemyImg
    y: -25
    width: 25
    height: 25
    source: "images/enemy.png"

    PropertyAnimation on y {
        id: enemyAnim
        target: enemyImg
        to: 300
        property: "y"
        duration: 326*5
//        onStopped: { enemyImg.visible = false; enemyModel.remove(this) }//enemyImg.destroy(); this.destroy() }
    }

//    onYChanged: if(y >= 300) { enemyImg.destroy(); this.destroy() }
}
