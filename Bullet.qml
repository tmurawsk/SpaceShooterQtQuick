import QtQuick 2.0
import "myScript.js" as MyScript

Image {
    id: bulletImg
    width: 5
    height: 15
    source: "images/bullet.png"
    property int speed: 3

    PropertyAnimation on y {
        id: bulletAnim
        target: bulletImg
        to: 0
        property: "y"
        duration: (speed * (mainWin.width - height))
    }

    onYChanged: if(y <= 0) { MyScript.removeBullet(x, y) }
}
