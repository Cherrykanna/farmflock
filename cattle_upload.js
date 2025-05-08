function openUploadOptions(type) {
    let input = document.getElementById(type + "-upload");
    let choice = confirm("Choose an option:\nOK = Upload from Files\nCancel = Open Camera");

    if (choice) {
        input.click(); // Open file picker
    } else {
        openCamera(type);
    }
}

// Function to open camera
function openCamera(type) {
    let video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.style.width = "100%";
    video.style.height = "100%";

    let uploadBox = document.querySelector(`.upload-box[onclick="openUploadOptions('${type}')"]`);
    uploadBox.innerHTML = "";
    uploadBox.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            alert("Camera access denied!");
        });
}

// Display preview after upload
document.querySelectorAll("input[type='file']").forEach(input => {
    input.addEventListener("change", event => {
        let file = event.target.files[0];
        let previewId = event.target.id.replace("-upload", "-preview");

        if (file) {
            let reader = new FileReader();
            reader.onload = () => {
                let preview = document.getElementById(previewId);
                preview.src = reader.result;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
});
