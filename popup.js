document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("input");
  const outputText = document.getElementById("output");
  const compressButton = document.getElementById("compress");
  const copyButton = document.getElementById("copy");

  let isCopied = false;

  compressButton.addEventListener("click", function () {
    const text = inputText.value;
    const cleanedText = text.replace(/\s+/g, " ").trim();
    outputText.value = cleanedText;
  });

  copyButton.addEventListener("click", function () {
    navigator.clipboard
      .writeText(outputText.value)
      .then(() => {
        if (!isCopied) {
          const originalText = copyButton.textContent;
          copyButton.textContent = "Copied!";
          isCopied = true;

          setTimeout(() => {
            copyButton.textContent = originalText;
            isCopied = false;
          }, 2000);
        }
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});
