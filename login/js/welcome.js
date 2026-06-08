function goLogin() {
    window.location.href = "/akbardeliyot/login/index.html";
}

function logout() {
    localStorage.removeItem("username");
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("username");

    if (user) {
        const userInfo = document.getElementById("userInfo");
        const authArea = document.getElementById("authArea");

        if (userInfo) userInfo.innerText = "Halo, " + user;
        if (authArea) authArea.innerHTML = `<button onclick="logout()" class="nav-cta">Logout</button>`;
    }
});
