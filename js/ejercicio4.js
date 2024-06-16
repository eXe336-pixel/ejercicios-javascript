class Rectangle {
    constructor(width, weight) {
        this.width = width;
        this.weight = weight;
    }
    area() {
        return this.width * this.weight;
    }
    perimetro() {
        return 2 * this.width + 2 * this.weight;
    }
}