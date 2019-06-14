export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;
export const JUMP_DELAY = 1000 /  4 ;
export const DRAW_SKIER = 0;
export const DRAW_RHINO = 1;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const RAMP = 'jumpRamp'; 
export const SKIER_JUMP = 'skierJump1'; 
export const RHINO = '  rhino'; 
export const RHINO_LEFT = '  rhinoLeft'; 
export const RHINO_LEFTDOWN = '  rhinoLeftDown'; 
export const RHINO_RIGHT = '  rhino'; 
export const RHINO_RIGHTDOWN = '  rhino'; 


export const SKIER_STARTING_SPEED = 5;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;
export const RHINO_STARTING_SPEED = 8;
export const RHINO_DIAGONAL_SPEED_REDUCER = 1.4142;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE] : 'img/tree_1.png',
    [TREE_CLUSTER] : 'img/tree_cluster.png',
    [ROCK1] : 'img/rock_1.png',
    [ROCK2] : 'img/rock_2.png',
    [RAMP] : 'img/jump_ramp.png', 
    [SKIER_JUMP] : 'img/skier_jump_1.png', 
    [RHINO] : 'img/rhino_default.png', 
    [RHINO_LEFT] : 'img/rhino_run_left.png', 
    [RHINO_LEFTDOWN] : 'img/rhino_run_left_2.png', 
   
   

};

export const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5,
    JUMP : 6 
};

export const RHINO_DIRECTIONS = {
   
    LEFT : 0,
    LEFT_DOWN : 1,
    DOWN : 2,
    RIGHT_DOWN : 3,
    RIGHT : 4
   
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT,
    [SKIER_DIRECTIONS.JUMP] : SKIER_JUMP
};

export const RHINO_DIRECTION_ASSET = {
   
  
    [RHINO_DIRECTIONS.LEFT_DOWN] : RHINO_LEFT,
    [RHINO_DIRECTIONS.DOWN] : RHINO,
     [RHINO_DIRECTIONS.RIGHT_DOWN] : RHINO_LEFTDOWN,
     
   
};




export const KEYS = {
    LEFT : 37,
    RIGHT : 39,
    UP : 38,
    DOWN : 40,
    SPACE :32

};



export const JUMPABLE_OBSTACLES = [
   ROCK1,
     ROCK2
   
];



