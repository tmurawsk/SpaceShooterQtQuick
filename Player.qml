import QtQuick 2.0
import "myScript.js" as MyScript

Image {
    id: playerImg
    x: (mainWin.width - 25)/2
    y: (mainWin.height - 25)
    width: 25
    height: 25
    source: "images/player.png"
    focus: true
    property int speed: 4

    Timer {
        id: playerCollisionCheckTimer
        interval: 10
        running: true
        repeat: true
        onTriggered: MyScript.checkEnemyCollisions(x, y)
    }

    PropertyAnimation {
        id: rightAnim
        target: playerImg
        property: "x"
        to: (mainWin.width - width)
        duration: (speed * (mainWin.width - width - x))
    }

    PropertyAnimation {
        id: leftAnim
        target: playerImg
        property: "x"
        to: 0
        duration: (speed * x)
    }

    Keys.onPressed: {
        if(event.key === Qt.Key_Right && playerImg.x < (mainWin.width - width))
            rightAnim.start()
        if(event.key === Qt.Key_Left && playerImg.x > 0)
            leftAnim.start()
        if(event.key === Qt.Key_Space)
            MyScript.createBullet(x, y)
        if(event.key === Qt.Key_Escape)
            close()
    }
    Keys.onReleased: {
        if(event.key === Qt.Key_Right)
            rightAnim.stop()
        if(event.key === Qt.Key_Left)
            leftAnim.stop()
    }
}
