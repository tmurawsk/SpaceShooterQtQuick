import QtQuick 2.0

Image {
    id: explosionImg
    width: 50
    height: 50
    source: "images/explosion.png"

    PropertyAnimation on opacity {
        id: explosionAnim
        target: explosionImg
        property: "opacity"
        to: 0
        duration: 500
        running: true
        onStopped: this.destroy()
    }
}
