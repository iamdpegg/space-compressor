document.addEventListener('DOMContentLoaded', function() {
  const inputText = document.getElementById('input');
  const outputText = document.getElementById('output');
  const compressButton = document.getElementById('compress');
  const copyButton = document.getElementById('copy');

  compressButton.addEventListener('click', function() {
      const text = inputText.value;
      const cleanedText = text.replace(/\s+/g, ' ').trim();
      outputText.value = cleanedText;
  });

  copyButton.addEventListener('click', function() {
      navigator.clipboard.writeText(outputText.value)
          .then(() => {
              console.log('Text copied to clipboard');
          })
          .catch(err => {
              console.error('Failed to copy text: ', err);
          });
  });
});
