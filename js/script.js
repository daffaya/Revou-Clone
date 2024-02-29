fetch("navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar-container").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching navbar:", error));

document
  .getElementById("data-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const timeStamp = new Date();

    const receivedData = document.createElement("div");
    receivedData.innerHTML = `
  <p><strong>Current Time: </strong> ${timeStamp}</p>
  <p><strong>Name:</strong> ${formData.get("name")}</p>
  <p><strong>Tanggal Lahir:</strong> ${formData.get("birthday")}</p>
  <p><strong>Jenis Kelamin:</strong> ${formData.get("gender")}</p>
  <p><strong>Pesan:</strong> ${formData.get("message")}</p>
`;

    const receiver = document.getElementById("data-form-receiver");
    receiver.innerHTML = "";
    receiver.appendChild(receivedData);

    const bannerSection = document.getElementById("banner-section");
    const bannerContent = bannerSection.innerHTML;
    bannerSection.innerHTML = `
  <h1>Hi ${formData.get("name")}</h1>
  ${bannerContent}
  `;

    const placeholder = document.getElementById("placeholder");
    if (placeholder) {
      placeholder.remove();
    }
  });
