import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";


export class Skier extends Entity {
    assetName = Constants.SKIER_DOWN;
    isJumping = false;
    direction = Constants.SKIER_DIRECTIONS.DOWN;
    distance = 0;
    speed = Constants.SKIER_STARTING_SPEED;

    constructor(x, y) {
        super(x, y);
    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
        if(this.isJumping){
         this.assetName = Constants.SKIER_DIRECTION_ASSET[Constants.SKIER_DIRECTIONS.JUMP];
        }
        else{
         this.assetName = Constants.SKIER_DIRECTION_ASSET[this.direction];
        }
       
    }

    move() {
        // Increase skier speed gradually and update the skier distance using speed.
        this.speed += 0.001; 
        this.distance += (0.06 + this.speed/5 ); 

        switch(this.direction) {
            case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                this.moveSkierLeftDown();
                break;
            case Constants.SKIER_DIRECTIONS.DOWN:
                this.moveSkierDown();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                this.moveSkierRightDown();
                break;
        }
    }

    moveSkierLeft() {
        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveSkierLeftDown() {
        this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierDown() {
        this.y += this.speed;
    }

    moveSkierRightDown() {
        this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierRight() {
        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveSkierUp() {
        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    turnLeft() {
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT ){
            this.moveSkierLeft();
        } 
        // handle cases where  a crash has happened and left key is pressed.
        else if ( this.direction === Constants.SKIER_DIRECTIONS.CRASH ){
            this.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
            this.moveSkierLeft();
          }
       else {
            
            this.setDirection(this.direction - 1); 
        }
    }

    turnRight() {
        if(this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierRight();
        }
        else {
            this.setDirection(this.direction + 1);
        }
    }

    turnUp() {
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT || this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierUp();
        }
    }

    turnDown() {
        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }
   /*
    * the method make the skier jump over obstacles
    * sets isJumping to true and updates the assets to animate jumping.
    * uses jumping_delay set time for jump.
   */
    jump() {
        this.isJumping = true;
        this.updateAsset();
      
        setTimeout(() => { this.resetSkier() }, Constants.JUMP_DELAY);
         
      
    }

    getDirection(){
        return this.direction;
    }
    /*
    * stops the skier jumping and restores the skier to the original asset.
    */
    resetSkier () {
       
        this.isJumping =false;
        this.setDirection(this.direction);
    }

    checkIfSkierHitObstacle(obstacleManager, assetManager) {
       
        const asset = assetManager.getAsset(this.assetName);
        const skierBounds = new Rect(
            this.x - asset.width / 2,
            this.y - asset.height / 2,
            this.x + asset.width / 2,
            this.y - asset.height / 4
        );

        const obstacleHit = obstacleManager.getObstacles().find((obstacle) => {
            const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
            const obstaclePosition = obstacle.getPosition();
            const obstacleBounds = new Rect(
                obstaclePosition.x - obstacleAsset.width / 2,
                obstaclePosition.y - obstacleAsset.height / 2,
                obstaclePosition.x + obstacleAsset.width / 2,
                obstaclePosition.y
            );

            return intersectTwoRects(skierBounds, obstacleBounds);
        });

        if(this.isACollision(obstacleHit)) {
          this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
        }
    };
        /*
        * checks if a collision has occured incase two objects meet, if the obstacle is a `ramp, a jump is initiated
        *  incase the skier is jumping at the time of the collision, then checks if obstacle is jumpable else a crash occurs.
        */
         isACollision(obstacle){
            if(obstacle){
            if(obstacle.assetName ===Constants.RAMP){
              if (!this.isJumping){
                  this.jump();
                  return false;
              }
             
             return false;  
             }
            else if(this.isJumping && Constants.JUMPABLE_OBSTACLES.includes(obstacle.assetName)){
            
             return false;
            }
            else return true; 
           
        }
        return false;
         }

}