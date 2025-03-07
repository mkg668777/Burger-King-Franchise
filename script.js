document.getElementById("orderButton").addEventListener("click", orderFood);

function orderFood() {
    let selectedItems = Array.from(document.querySelectorAll('.food-items input:checked'))
                            .map(item => item.value);

    if (selectedItems.length === 0) {
        alert("Please select at least one food item!");
        return;
    }

    document.getElementById("loading").style.display = "block";
    document.getElementById("foodContainer").innerHTML = ""; // पहले की इमेज हटा दें
    document.getElementById("orderId").textContent = "";

    let orderId = "BK-" + Math.floor(10000 + Math.random() * 90000);

    let foodImages = {
        burger: "burger.jpg",
        fries: "fries.jpg",
        coke: "coke.jpg",
        nuggets: "nuggets.jpg",
        pizza: "pizza.jpg",
        icecream: "ICE.jpg",
    };

    let randomTime = Math.floor(Math.random() * 4000) + 2000; 

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("orderId").textContent = "Order ID: " + orderId;

        selectedItems.forEach(item => {
            if (foodImages[item]) {
                let imgElement = document.createElement("img");
                imgElement.src = foodImages[item];
                imgElement.alt = item;
                imgElement.classList.add("food-image");
                document.getElementById("foodContainer").appendChild(imgElement);
            } else {
                console.error("Image not found for", item);
            }
        });

        alert("Your order is ready! Order ID: " + orderId);
    }, randomTime);
}
