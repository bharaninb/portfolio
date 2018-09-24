class Balloon {

  constructor(canvasElement, centerX, centerY, radius, color) {
    this.KAPPA = (4 * (Math.sqrt(2) - 1)) / 3;
    this.WIDTH_FACTOR = 0.0333;
    this.HEIGHT_FACTOR = 0.4;
    this.TIE_WIDTH_FACTOR = 0.12;
    this.TIE_HEIGHT_FACTOR = 0.10;
    this.TIE_CURVE_FACTOR = 0.13;
    this.GRADIENT_FACTOR = 0.3;
    this.GRADIENT_CIRCLE_RADIUS = 3;

    this.canvasElement = canvasElement;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    // this.baseColor = new Color(color);
    // this.darkColor = (new Color(color)).darken(this.GRADIENT_FACTOR);
    // this.lightColor = (new Color(color)).lighten(this.GRADIENT_FACTOR);
    this.baseColor = this.color;
    this.darkColor = this.color;
    this.lightColor = this.color;

    // Prepare constants

    const canvasElement = this.canvasElement.getContext('2d');
    const centerX = this.centerX;
    const centerY = this.centerY;
    const radius = this.radius;

    const handleLength = this.KAPPA * radius;

    const widthDiff = (radius * this.WIDTH_FACTOR);
    const heightDiff = (radius * this.HEIGHT_FACTOR);

    const balloonBottomY = centerY + radius + heightDiff;

    // Begin balloon path

    canvasElement.beginPath();

    // Top Left Curve

    const topLeftCurveStartX = centerX - radius;
    const topLeftCurveStartY = centerY;

    const topLeftCurveEndX = centerX;
    const topLeftCurveEndY = centerY - radius;

    canvasElement.moveTo(topLeftCurveStartX, topLeftCurveStartY);
    canvasElement.bezierCurveTo(topLeftCurveStartX, topLeftCurveStartY - handleLength - widthDiff,
      topLeftCurveEndX - handleLength, topLeftCurveEndY,
      topLeftCurveEndX, topLeftCurveEndY);

    // Top Right Curve

    const topRightCurveStartX = centerX;
    const topRightCurveStartY = centerY - radius;

    const topRightCurveEndX = centerX + radius;
    const topRightCurveEndY = centerY;
    canvasElement.bezierCurveTo(topRightCurveStartX + handleLength + widthDiff, topRightCurveStartY,
      topRightCurveEndX, topRightCurveEndY - handleLength,
      topRightCurveEndX, topRightCurveEndY);
    // Bottom Right Curve

    const bottomRightCurveStartX = centerX + radius;
    const bottomRightCurveStartY = centerY;

    const bottomRightCurveEndX = centerX;
    const bottomRightCurveEndY = balloonBottomY;
    canvasElement.bezierCurveTo(bottomRightCurveStartX, bottomRightCurveStartY + handleLength,
      bottomRightCurveEndX + handleLength, bottomRightCurveEndY,
      bottomRightCurveEndX, bottomRightCurveEndY);
    // Bottom Left Curve

    const bottomLeftCurveStartX = centerX;
    const bottomLeftCurveStartY = balloonBottomY;

    const bottomLeftCurveEndX = centerX - radius;
    const bottomLeftCurveEndY = centerY;
    canvasElement.bezierCurveTo(bottomLeftCurveStartX - handleLength, bottomLeftCurveStartY,
      bottomLeftCurveEndX, bottomLeftCurveEndY + handleLength,
      bottomLeftCurveEndX, bottomLeftCurveEndY);
    // Create balloon gradient

    const gradientOffset = (radius / 3);

    const balloonGradient =
      canvasElement.createRadialGradient(centerX + gradientOffset, centerY - gradientOffset,
        this.GRADIENT_CIRCLE_RADIUS,
        centerX, centerY, radius + heightDiff);
    balloonGradient.addColorStop(0, 'red');
    balloonGradient.addColorStop(0.7, 'orange');
    canvasElement.strokeStyle = balloonGradient;
    canvasElement.stroke();
    // End balloon path

    // Create balloon tie

    const halfTieWidth = (radius * this.TIE_WIDTH_FACTOR) / 2;
    const tieHeight = (radius * this.TIE_HEIGHT_FACTOR);
    const tieCurveHeight = (radius * this.TIE_CURVE_FACTOR);

    canvasElement.beginPath();
    canvasElement.moveTo(centerX - 1, balloonBottomY);
    canvasElement.lineTo(centerX - halfTieWidth, balloonBottomY + tieHeight);
    canvasElement.quadraticCurveTo(centerX, balloonBottomY + tieCurveHeight,
      centerX + halfTieWidth, balloonBottomY + tieHeight);
    canvasElement.lineTo(centerX + 1, balloonBottomY);
    canvasElement.fill();
  }

  move() {
    console.log(this.canvasElement);
    const canvasElement = this.canvasElement.getContext('2d');
    canvasElement.fillStyle = 'rgba(255, 255, 255, 0.3)';
    canvasElement.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.draw();
    this.radius += 2;
    window.requestAnimationFrame(this.move());
  }
}

export default Balloon;