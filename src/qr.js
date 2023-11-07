document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("qr-video");
  const accountIdDisplay = document.getElementById("account-id");
  const scanButton = document.getElementById("scan-qr-button");

  let cameraStream;

  async function startCamera() {
      try {
          cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
          video.srcObject = cameraStream;
      } catch (error) {
          console.error("Error accessing the camera: ", error);
          // Display an error message to the user or handle the error accordingly.
      }

      Quagga.init({
          inputStream: {
              name: "Live",
              type: "LiveStream",
              target: video,
          },
          decoder: {
              readers: ["code_128_reader"],
          },
      });

      Quagga.onDetected((result) => {
          const code = result?.codeResult?.code;
          if (code) {
              accountIdDisplay.textContent = `Account ID: ${code}`;
          }
      });

      Quagga.start();
  }

  scanButton.addEventListener("click", () => {
      if (!cameraStream) {
          startCamera();
      }
  });
});
