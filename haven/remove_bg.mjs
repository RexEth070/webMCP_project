import { Jimp } from 'jimp';

async function removeBackground() {
  try {
    const image = await Jimp.read('public/3d-money.jpg');
    
    // In Jimp 1.x, we iterate differently or use scan
    image.scan((x, y, idx) => {
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      const cmax = Math.max(r, g, b) / 255;
      const cmin = Math.min(r, g, b) / 255;
      const delta = cmax - cmin;
      
      let s = 0;
      if (cmax !== 0) {
        s = delta / cmax;
      }
      
      const v = cmax;
      
      if (s < 0.2 && v > 0.75) {
        image.bitmap.data[idx + 3] = 0; // Alpha
      }
    });

    await image.write('public/3d-money-transparent.png');
    console.log('Background removed successfully!');
  } catch (err) {
    console.error(err);
  }
}

removeBackground();
