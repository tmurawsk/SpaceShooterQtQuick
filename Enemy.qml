import QtQuick 2.0
import "myScript.js" as MyScript

Image {
    id: enemyImg
    y: -25
    width: 25
    height: 25
    source: "images/enemy.png"
    property int speed: 8

    PropertyAnimation on y {
        id: enemyAnim
        target: enemyImg
        to: mainWin.height
        property: "y"
        duration: speed * (mainWin.height + height - y)
        onStopped: if(y < mainWin.height) enemyAnim.start()
    }

    onYChanged: if(y >= mainWin.height) { MyScript.removeEnemy(x, y) }
}
