import QtQuick 2.0
import "myScript.js" as MyScript

Item {
    id: game

    Timer {
        id: spawningEnemyTimer
        interval: 1000
        running: true
        repeat: true
        onTriggered: MyScript.spawnEnemy()
    }

    Timer {
        id: collisionCheckTimer
        interval: 100
        running: true
        repeat: true
        onTriggered: MyScript.checkCollisions()
    }

//    ListView {
//        id: enemyList
//        anchors.fill: parent
//        model: enemyModel
//        delegate: Enemy { }
//    }

//    ListModel {
//        id: enemyModel
//    }

//    ListView {
//        id: bulletList
//        anchors.fill: parent
//        model: bulletModel
//        delegate: Bullet { }
//    }

//    ListModel {
//        id: bulletModel
//    }

    Player { }
}
