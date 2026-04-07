import { auto } from '@cloudinary/url-gen/actions/resize';
import { Cloudinary } from '@cloudinary/url-gen/index';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'lamardev',
  },
});

const lastStopShopThumb = cld
  .image('lastStopShop_anih5y')
  .format('auto')
  .quality('auto')
  .resize(auto());

const portfolioBgDesktop = cld
  .image('portfolioBg-Desktop_orkmmn')
  .format('auto')
  .quality('auto')
  .resize(auto());

const portfolio4K = cld
  .image('portfolioBg-4k_s5vb1s')
  .format('auto')
  .quality('auto')
  .resize(auto());

export default { lastStopShopThumb, portfolioBgDesktop, portfolio4K };
