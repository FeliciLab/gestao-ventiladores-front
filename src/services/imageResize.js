const imageResize = (
  {
    file,
    maxWidth,
    maxHeight,
    qualityRate,
    fullImage,
  },
) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  // CONST
  const MAX_WIDTH = maxWidth || 1280;
  const MAX_HEIGHT = maxHeight || 720;
  const QUALITY_IMG = qualityRate || 0.70;

  const imagem = new Image();

  reader.onload = (e) => {
    imagem.src = e.target.result;
  };

  let blob;
  const getBlob = () => new Promise((resolve) => {
    const convert = (b64Data, contType, sliceSz) => {
      const contentType = contType || '';
      const sliceSize = sliceSz || 512;
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i += 1) byteNumbers[i] = slice.charCodeAt(i);

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      return new Blob(byteArrays, { type: contentType });
    };

    imagem.onload = () => {
      if (this.width === 0 || this.height === 0) {
        console.log('Image is empty');
      } else {
        const scale = (MAX_WIDTH / this.width);

        const can = document.createElement('canvas');
        can.width = fullImage
          ? this.width
          : MAX_WIDTH;
        can.height = fullImage
          ? this.height
          : this.height * scale;

        can.style.visibility = 'hidden';

        const ctx = can.getContext('2d');

        ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
        if (fullImage) {
          ctx.drawImage(imagem, 0, 0, this.width, this.height);
        } else {
          ctx.drawImage(imagem, 0, 0, MAX_WIDTH, this.height * scale);
        }

        const canvasUrl = can.toDataURL('image/jpeg', QUALITY_IMG);
        const BASE64_MARKER = 'base64,';
        const base64Index = canvasUrl.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        const base64 = canvasUrl.substring(base64Index);
        const data = canvasUrl.split(',')[1];
        const mimeType = canvasUrl.split(',')[0].split(':')[1].split(';')[0];
        blob = convert(data, mimeType, 1);
        resolve({ blob, base64 });
      }
    };
  });
  return getBlob();
};

export default imageResize;
