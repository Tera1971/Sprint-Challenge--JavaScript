// 1. Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker(length, width, height) {
    constructor (info) 
    this.length = info.length;
    this.width = info.width;
    this.height = info.height;
  
        volume = function (volume) {
            const volume = this.length * this.width * this.height;
        }
        surface = function (surface) {
                const surface =  2 * (length * width + length * height + width * height);
            }
            class CuboidMaker extends cuboid {
                constructor (info) {
                super(info);
                this.length = info.length;
                this.width = info.width;
                this.height = info.height;
                };
       }   
    }
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.