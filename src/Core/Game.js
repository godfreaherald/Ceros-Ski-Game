import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { Skier } from "../Entities/Skier";
import { Rhino } from "../Entities/Rhino";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';


export class Game {
    gameWindow = null;
   skierChase =false;
   stopped = false;
   scores = [];



    constructor() {
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
     

        this.skier = new Skier(0, 0);
       this.Rhino = new Rhino(-10,1);
        this.obstacleManager = new ObstacleManager();

    

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
       
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }



    run () {
 
        this.canvas.clearCanvas();
        this.updateGameWindow();
        this.drawGameWindow();

        this.Rhino.checkAttackStatus(this.skier);
       // update_dom.scoreBoard(this.skier);
           
           requestAnimationFrame(this.run.bind(this));
        
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }


   
    updateGameWindow() {

              
        this.skier.move();
        /* check if Rhino can start the chase       */
        if(this.Rhino.attack ){
            
            this.Rhino.draw(this.canvas, this.assetManager);
             
           this.Rhino.move(); 
        }
       
        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
    }

    
    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);
        
        this.skier.draw(this.canvas, this.assetManager);
        
        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
    }

    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);

        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);

        
    }
   

    handleKeyDown(event) {
        switch(event.which) {
            case Constants.KEYS.LEFT:
                this.skier.turnLeft();
                event.preventDefault();
                break;
            case Constants.KEYS.RIGHT:
                this.skier.turnRight();
                event.preventDefault();
                break;
            case Constants.KEYS.UP:
                this.skier.turnUp();
                event.preventDefault();
                break;
            case Constants.KEYS.DOWN:
                this.skier.turnDown();
                event.preventDefault();
                break;
            case Constants.KEYS.SPACE:
                this.skier.jump();
                event.preventDefault();
                break;
        }
    }
}