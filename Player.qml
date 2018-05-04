import QtQuick 2.0
import "myScript.js" as MyScript

Image {
    id: playerImg
    x: 188
    y: 275
    width: 25
    height: 25
    source: "images/player.png"
    focus: true

    states: [
        State {
            name: "rightPos"
            PropertyChanges {
                target: playerImg
                x: 375
            }
        },

        State {
            name: "leftPos"
            PropertyChanges {
                target: playerImg
                x: 0
            }
        }
    ]

//    Behavior on x {
//        id: behav
//        NumberAnimation {
//            id: anim
//            duration: 600
//        }
//    }

//    transitions: [
//        Transition {
//            id: rightTrans
//            from: "*"
//            to: "rightPos"
            PropertyAnimation {
                id: rightAnim
                target: playerImg
                property: "x"
                to: 375
                duration: (2.5 * (375 - x))
            }
//        },
//        Transition {
//            id: leftTrans
//            from: "*"
//            to: "leftPos"
            PropertyAnimation {
                id: leftAnim
                target: playerImg
                property: "x"
                to: 0
                duration: (2.5 * x)
            }
//        }
//    ]

    Keys.onPressed: {
        if(event.key === Qt.Key_Right && playerImg.x < 375)
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
