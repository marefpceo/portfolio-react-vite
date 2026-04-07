import { Cloudinary } from '@cloudinary/url-gen/index';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'lamardev',
  },
});

export default cld;
