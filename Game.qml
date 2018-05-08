import QtQuick 2.0
import "myScript.js" as MyScript

Item {
    id: game
    property int score: 0
    property int lives: 3
    property var bulletList: []
    property var enemyList: []

    Text {
        id: scoreText
        x: 5
        text: 'score: ' + score
        font.family: "Helvetica"
        font.bold: true
        font.pointSize: 18
        color: "#5555FF"
    }

    Text {
        id: livesText
        x: 5
        y: 15
        text: 'lives: ' + lives
        font.family: "Helvetica"
        font.bold: true
        font.pointSize: 18
        color: "red"
    }

    Timer {
        id: spawningEnemyTimer
        interval: 1000
        running: true
        repeat: true
        onTriggered: MyScript.spawnEnemy()
    }

    Timer {
        id: collisionCheckTimer
        interval: 10
        running: true
        repeat: true
        onTriggered: MyScript.checkCollisions()
    }

//    ListView {
//        id: enemyList
//        anchors.fill: parent
//        model: enemyModel
//        delegate: enemyImg
//    }

//    ListModel {
//        id: enemyModel
//    }

//    ListView {
//        id: bulletList
//        anchors.fill: parent
//        model: bulletModel
//        delegate: bulletImg
//    }

//    ListModel {
//        id: bulletModel
//    }

    Player { }
}
