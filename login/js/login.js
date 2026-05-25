document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "heri" && password === "123") {
        localStorage.setItem("username", username);
        window.location.href = "../index.html";
    } else {
        const alertBox = document.getElementById("alertBox");
        alertBox.innerText = "Username atau Password salah, silahkan coba lagi";
        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    }
});
