var products = [
    { name: "Boat Ultra Gen3", price: "3,099", image: "https://imgs.search.brave.com/iE45W8HKbVSW6bVUXvzQfBHMTOC52wHbmI9dHBxQb34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9hdC1saWZlc3R5/bGUuY29tL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L1I1NTA1MG1tZHJp/dmVyc18yZWNiZWQw/Yi1hNzMxLTQxZGIt/YjUzMi1kYWVkODM4/YzViNWRfMTUwMHgu/anBnP3Y9MTY1OTMz/OTU0Ng", heading: "Exellent for Music" },
    { name: "Air Pods pro", price: "7,999", image: "https://imgs.search.brave.com/FO-zNuxMmCc7dC8hZcnwcEZQu00Dgh4T9DgQ4F6s6nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NTcyODUxMi9waG90/by9hLXBhaXItb2Yt/YXBwbGUtYWlycG9k/cy1tYXgtaGVhZHBo/b25lcy13aXRoLWEt/Z3JlZW4tZmluaXNo/LXRha2VuLW9uLWph/bnVhcnktMjAtMjAy/MS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9LTFYOERBdnAt/THFTV29CMGpxS3B6/LUlUakJwU0czREZa/UDVTTjVwTGNWND0", heading: "Scent of Luxury" },
    { name: "Sony sonic.AI", price: "4,999", image: "https://imgs.search.brave.com/thUegRj7s8XAljaCgR6FvvarK66SCzW3dtQugYFJDkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbS5p/Z24uY29tL3QvaWdu/X21lL3NjcmVlbnNo/b3QvZGVmYXVsdC9v/dmVydmlldzMtbV82/MXlrLjEwMjQuanBn", heading: "Beast for Gaming" },
    { name: "Sony z7", price: "4,950", image: "https://imgs.search.brave.com/NMNrtIzfLuIWRtAZvYLfL_7Dt2UUkPC68uW29FWK0eA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIva3p4/MWE0dzAvaGVhZHBo/b25lLzgvbS92Ly1v/cmlnaW5hbC1pbWFn/YnQ0NzRhZHF1aGh6/LmpwZWc_cT03MA", heading: "Better for Expirience" },
    { name: "JBL BassX 500", price: "5,499", image: "https://imgs.search.brave.com/Bo6GP14U7lelcJt63foOYwCyjLgZ4PK8t_k4naYdxfA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEtaGFWZ1ZWREwu/anBn", heading: "Thunderous Bass" },
    { name: "Skullcandy Crusher Evo", price: "8,299", image: "https://imgs.search.brave.com/JYfiQZfBHpqZrTFJJcF4yIhQ2EpurZqH68Z0YZMKvGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nemhs/cy5hdC9pLzEzLzAy/LzIzNzEzMDItbjAu/anBn", heading: "Feel the Vibes" },
    { name: "Boat Rockerz 550", price: "2,499", image: "https://imgs.search.brave.com/Up2wlHVwaNdyLHu1WWP69OFwYYYPe86rtV4PRGpQf1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXlnLmluL2ltYWdl/cy90aHVtYm5haWxz/LzMwMC8zMDAvZGV0/YWlsZWQvNjMvNzFz/REpfWFptZ0wuX1NZ/NDUwXy5qcGcucG5n", heading: "Wireless Freedom" },
    { name: "Sennheiser HD 450BT", price: "6,299", image: "https://m.media-amazon.com/images/I/71St1R5DFGL._AC_UY218_.jpg", heading: "Studio Clarity" },
    { name: "Marshall Major IV", price: "9,499", image: "https://imgs.search.brave.com/7CSqEQkvsETdSQQqc7hhLPRdqYGVFoAYtAos3RX0LfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1c3RlZHJldmll/d3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy83LzIw/MjEvMDcvTWFyc2hh/bGwtTWFqb3ItSVYt/c2lkZS04MjB4NDYx/LmpwZw", heading: "Retro Style, Modern Sound" },
    { name: "Bose QuietComfort 45", price: "14,999", image: "https://m.media-amazon.com/images/I/51HHABMPoVL.__AC_SX300_SY300_QL70_FMwebp_.jpg", heading: "Silence the World" },
    { name: "OnePlus Bullets Z2", price: "1,999", image: "https://m.media-amazon.com/images/I/61PSwxcN8wL._AC_UY218_.jpg", heading: "Budget Beast" },
];
var popular = [
    { name: "Boat Ultra Gen3", price: "3,099", image: "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D", heading: "Exellent for Music" },
    { name: "Sony sonic.AI", price: "4,999", image: "https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", heading: "Beast for Gaming" },
    { name: "Marshall Major IV", price: "9,499", image: "https://imgs.search.brave.com/7CSqEQkvsETdSQQqc7hhLPRdqYGVFoAYtAos3RX0LfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1c3RlZHJldmll/d3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy83LzIw/MjEvMDcvTWFyc2hh/bGwtTWFqb3ItSVYt/c2lkZS04MjB4NDYx/LmpwZw", heading: "Retro Style, Modern Sound" },
    { name: "JBL BassX 500", price: "5,499", image: "https://imgs.search.brave.com/Bo6GP14U7lelcJt63foOYwCyjLgZ4PK8t_k4naYdxfA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEtaGFWZ1ZWREwu/anBn", heading: "Thunderous Bass" },
];
var cart = [];

function addProducts() {
    var clutter = '';
    products.forEach(function (products, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class=" w-full h-full object-cover object-center "src="${products.image}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${products.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${products.heading}</h3>
                            <h4 class="font-semibold mt-2"> ₹ ${products.price}</h4>
                        </div>
                        <button data-index="${index}" class="add  w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class="add  ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    });
    document.querySelector(".products").innerHTML = clutter;
};

function addPopularproduct() {
    var clutter = '';
    popular.forEach(function (products) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${products.image}">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${products.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${products.heading}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${products.price}</h4>
                    </div>
                </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
};

function addToCart() {

    document.querySelector(".products")
        .addEventListener("click", function (details) {
            if (details.target.classList.contains("add")) {
                cart.push(products[details.target.dataset.index])
            };
        });
};

function showCart() {
    let isOpen = false;

    document.querySelector(".carticon").addEventListener("click", function () {
        const cartBox = document.querySelector(".cartexpnd");

        if (!isOpen) {
            cartBox.style.display = "block";

            if (cart.length === 0) {
                cartBox.innerHTML = `<p class="text-center text-sm font-semibold text-zinc-500 py-5">
                    Your cart is empty 🛒
                </p>`;
            } else {
                let clutter = '';
                cart.forEach(function (products, index) {
                    clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                        <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                            <img class="h-full w-full object-cover" src="${products.image}" />
                        </div>
                        <div>
                            <h3 class="font-semibold">${products.name}</h3>
                            <h5 class="text-sm font-semibold opacity-80">₹${products.price}</h5>
                        </div>
                    </div>`;
                });
                cartBox.innerHTML = clutter;
            }

            isOpen = true;
        } else {
            // ✅ Hide & clear cart
            cartBox.style.display = "none";
            cartBox.innerHTML = "";
            isOpen = false;
        }
    });
}


showCart();
addToCart();
addPopularproduct();
addProducts();

