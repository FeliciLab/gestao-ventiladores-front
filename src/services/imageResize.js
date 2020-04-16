function imageResize (file, maxWidth, maxHeight, qualityRate) {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  // CONST
  const MAX_WIDTH = maxWidth || 1280;
  const MAX_HEIGHT = maxHeight || 720;
  const QUALITY_IMG = qualityRate || 0.70;

  const imagem = new Image();

  reader.onload = (e) => {
    imagem.src = e.target.result;
  };
  reader.onabort = function () {
    console.log('The upload was aborted.');
  };
  reader.onerror = function () {
    console.log('An error occured while reading the file.');
  };

  let blob;
  const getBlob = function () {
    return new Promise((resolve) => {
        const convert = (b64Data, contentType, sliceSize) => {
          contentType = contentType || '';
          sliceSize = sliceSize || 512;
          const byteCharacters = atob(b64Data);
          const byteArrays = [];
          for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);

            for (let i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          return new Blob(byteArrays, {type: contentType});
        };

        imagem.onload = function () {
          if (this.width === 0 || this.height === 0) {
            console.log('Image is empty');
          } else {

            const scale = (MAX_WIDTH / this.width);

            const can = document.createElement('canvas');
            can.width = MAX_WIDTH;
            can.height = this.height * scale;

            can.style.visibility = 'hidden';

            const ctx = can.getContext('2d');

            ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
            ctx.drawImage(imagem, 0, 0, MAX_WIDTH, this.height * scale);
            // ctx.drawImage(imagem, 0, 0, this.width, this.height, 0, 0, MAX_WIDTH, MAX_HEIGHT);

            const canvasUrl = can.toDataURL('image/jpeg', QUALITY_IMG);
            const BASE64_MARKER = 'base64,';
            const base64Index = canvasUrl.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
            const base64 = canvasUrl.substring(base64Index);
            const data = canvasUrl.split(',')[1];
            const mimeType = canvasUrl.split(',')[0].split(':')[1].split(';')[0];
            blob = convert(data, mimeType, 1);
            resolve({blob, base64});
          }
        };
      }
    );
  };
  return getBlob();
}

export default imageResize;