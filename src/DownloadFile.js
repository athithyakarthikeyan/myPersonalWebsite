export default function downloadFile() {
  const url = './src/assets/Athithya Resume.pdf';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';

  xhr.onload = function() {
      const urlCreator = window.URL || window.webkitURL;
      const fileUrl = urlCreator.createObjectURL(this.response);
      const tag = document.createElement('a');
      tag.href = fileUrl;
      tag.download = 'Athithya Resume.pdf';
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
  };

  xhr.send();
}
