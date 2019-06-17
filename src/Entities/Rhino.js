import * as Constants from "../Constants";
import { Entity } from "./Entity";
import * as Skier from "./Skier";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Rhino extends Entity {
    assetName = Constants.RHINO;
   
    direction = Constants.RHINO_DIRECTIONS.DOWN;
    prevDirection = this.direction;
    speed = Constants.SKIER_STARTING_SPEED;
    rhinoSkierCollided = false;
     rhinoSkierCollide =0;
    rhinoDirection =0;
    attack =false;


    constructor(x, y) {
        super(x, y);

    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
     
      this.assetName = Constants.RHINO_DIRECTION_ASSET[this.direction];
        
       
    }


    

    move() {
        
      switch(this.direction) {
            case Constants.RHINO_DIRECTIONS.LEFT_DOWN:
                this.moveRhinoLeftDown();
                break;
            case Constants.RHINO_DIRECTIONS.DOWN:
                this.moveRhinoDown();
                break;
            case Constants.RHINO_DIRECTIONS.RIGHT_DOWN:
                this.moveRhinoRightDown();
                break;
        }
    
    }
   

    moveRhinoLeftDown() {
        this.x -= this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
    }

    moveRhinoDown() {
        this.y += this.speed;
    }

    moveRhinoRightDown() {
        this.x += this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
    }

   
    


    checkAttackStatus (skier) {
     //check if to start Rhino chase 
    if (skier.distance > 1000 ) {
             this.attack = true;
            
              }
    }

}
