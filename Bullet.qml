import QtQuick 2.0

Image {
    id: bulletImg
    width: 5
    height: 15
    source: "images/bullet.png"

    PropertyAnimation on y {
        id: bulletAnim
        target: bulletImg
        to: 0
        property: "y"
        duration: (1.5 * 260)
    }

//    onYChanged: if(y <= 0) { bulletImg.destroy(); this.destroy() }
}
