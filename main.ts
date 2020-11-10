controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
function turn (direction: number) {
    if (direction == 0) {
        controlSprite.setVelocity(0, -50)
    } else if (direction == 1) {
        controlSprite.setVelocity(50, 0)
    } else if (direction == 2) {
        controlSprite.setVelocity(0, 50)
    } else if (direction == 3) {
        controlSprite.setVelocity(-50, 0)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
let direction = 0
let controlSprite: Sprite = null
tiles.setTilemap(tilemap`level`)
controlSprite = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
scene.cameraFollowSprite(controlSprite)
tiles.placeOnTile(controlSprite, tiles.getTileLocation(7, 9))
direction = -1
forever(function () {
    if (smoothturn.isCloseEnoughToTileCenter(controlSprite)) {
        if (direction == 0) {
            if (!(smoothturn.isWall(controlSprite, CollisionDirection.Top))) {
                smoothturn.alignToTileCenter(controlSprite)
                turn(direction)
                direction = -1
            }
        } else if (direction == 1) {
            if (!(smoothturn.isWall(controlSprite, CollisionDirection.Right))) {
                smoothturn.alignToTileCenter(controlSprite)
                turn(direction)
                direction = -1
            }
        } else if (direction == 2) {
            if (!(smoothturn.isWall(controlSprite, CollisionDirection.Bottom))) {
                smoothturn.alignToTileCenter(controlSprite)
                turn(direction)
                direction = -1
            }
        } else if (direction == 3) {
            if (!(smoothturn.isWall(controlSprite, CollisionDirection.Left))) {
                smoothturn.alignToTileCenter(controlSprite)
                turn(direction)
                direction = -1
            }
        }
    }
})
