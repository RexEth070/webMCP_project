const Jimp = require('jimp');

async function removeBackground() {
  try {
    const image = await Jimp.read('public/3d-money.jpg');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Calculate max and min for saturation
      const cmax = Math.max(r, g, b) / 255;
      const cmin = Math.min(r, g, b) / 255;
      const delta = cmax - cmin;
      
      let s = 0;
      if (cmax !== 0) {
        s = delta / cmax;
      }
      
      // Calculate brightness (value)
      const v = cmax;
      
      // The dollar bill is green (high saturation, non-grey).
      // The background is grey/white checkerboard (low saturation, high brightness).
      if (s < 0.2 && v > 0.8) {
        // Set alpha to 0 for background
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.writeAsync('public/3d-money-transparent.png');
    console.log('Background removed successfully!');
  } catch (err) {
    console.error(err);
  }
}

removeBackground();
