document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const randomStringTextarea = document.getElementById("randomString");
  const stringLengthInput = document.getElementById("stringLength");

  generateButton.addEventListener("click", function () {
    const stringLength = parseInt(stringLengthInput.value, 10);
    const randomString = generateRandomString(stringLength);
    randomStringTextarea.value = randomString;
  });

  function generateRandomString(length) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  }
});
