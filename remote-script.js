fetch("https://soiluoi.github.io/mac_web_feedback/config.json?time=" + Date.now())
    .then(response => response.json())
    .then(config => {
        document.getElementById("message").textContent = config.message;

        const actionsContainer = document.getElementById("actions");
        actionsContainer.innerHTML = ""; // Xóa nội dung cũ

        config.actions.forEach(action => {
            const button = document.createElement("button");
            button.textContent = action.name;
            button.style.display = "block";
            button.style.margin = "5px";

            if (action.type === "open_url") {
                button.addEventListener("click", () => window.open(action.url, "_blank"));
            } else if (action.type === "show_notification") {
                button.addEventListener("click", () => alert(action.message));
            }

            actionsContainer.appendChild(button);
        });
    })
    .catch(error => console.error("Lỗi khi tải config:", error));

console.log("Script từ GitHub Pages đã chạy!");

// Thêm export để dùng với import()
export { };