import "babel-polyfill";
import { Skier } from '../Entities/Skier';
import * as Constants from '../Constants';

describe('Test skier movement', () => {
    let skier;

    beforeEach(() => {
        skier = new Skier(0, 0);
        skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    });

    beforeEach(() => {
        skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    });


    describe('Jumping Test', () => {
        test('Should have the skier jumping', () => {
            skier.jump();
            expect(skier.isJumping).toBe(true);  
        });
    });

    describe('Skier Turning  tests', () => {

        test('should have skier instantiated', () => {
            expect(skier).not.toBe(null);
        });

        test('should have the skier  after a crash face left', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
            skier.turnLeft();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
        });

        test('should have the skier face left', () => {
            skier.turnLeft();
            skier.turnLeft();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
        });

        test('should have the skier face left-down', () => {
            skier.turnLeft();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
        });
        
        test('should have the skier face right', () => {
            skier.turnRight();
            skier.turnRight();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
        });

        test('should have the skier face rightdown', () => {
            skier.turnRight();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
        });

        

        
    });

    describe('Skier Navigation tests', () => {
        test('should have skier not null', () => {
             expect(skier).not.toBe(null);
        });

        test('should have the skier move right', () => {
            const skierXPos = skier.x;
            skier.moveSkierRight();
            expect(skier.x).toBeGreaterThan(skierXPos);
        });

        test('should have the skier move left', () => {
            const skierXPos = skier.x;
            skier.moveSkierLeft();
            expect(skier.x).toBeLessThan(skierXPos);
        });
        test('should have the skier move down', () => {
            const skierYPos = skier.y;
            skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
            skier.moveSkierDown();
            expect(skier.y).toBeGreaterThan(skierYPos);
        });

         test('should have the skier move up', () => {
            const skierYPos = skier.y;
            skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
            skier.moveSkierUp();
            expect(skier.y).toBeLessThan(skierYPos);
        });

       
    });
});