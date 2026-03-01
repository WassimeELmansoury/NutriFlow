export function renderStarPage() {
    const page = document.getElementById("bodyP");
    page.innerHTML = ` 
    <main class="welcome-screen">
        <div class="logo-container">
            <img src="./image/home_1.png" alt="Logo App" class="logo">
        </div>
        <div class="lower-image">
            <img src="./image/home_2.png" alt="Burger" class="burger">
        </div>
        <div class="btn-Next">
            <button class="btn-next">Next</button>
        </div>
    </main>`;
}

export function renderHomePage() {
    const page = document.getElementById("bodyP"); // نفس الـ ID
    page.innerHTML = `
    <main class="app-container">
        <header class="logo-container">
            <img src="./image/home_1.png" alt="Logo" class="logo">
        </header>

        <h1>What Do You Want To Cook Today ?</h1>

        <div class="search-card">
            <img src="./image/search.png" alt="search icon" class="search-icon">
            <input type="text" placeholder="Search Recipe">
        </div>

        <section class="categories-grid">
            <div class="cat-item"><img src="./image/breakfast.png" alt=""><p>Breakfast</p></div>
            <div class="cat-item"><img src="./image/dinner.png" alt=""><p>Dinner</p></div>
            <div class="cat-item"><img src="./image/Dessert.png" alt=""><p>Dessert</p></div>
            <div class="cat-item"><img src="./image/drink.png" alt=""><p>Drink</p></div>
            <div class="cat-item"><img src="./image/fast-food.png" alt=""><p>Fast Food</p></div>
            <div class="cat-item"><img src="./image/coffee-cup.png" alt=""><p>Coffee</p></div>
            <div class="cat-item"><img src="./image/noodles.png" alt=""><p>Noodles</p></div>
            <div class="cat-item"><img src="./image/burrito.png" alt=""><p>Sandwichs</p></div>
            <div class="cat-item"><img src="./image/hot-soup.png" alt=""><p>Soup</p></div>
            <div class="cat-item"><img src="./image/Lunch.png" alt=""><p>Lunch</p></div>
        </section>

        <h2 class="section-title">Recommendation</h2>
        <div class="recommendations-container">
            <div class="recipe-card">
                <div class="fav-icon">⭐</div>
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-tomato-sauce-on-pasta.jpg" alt="Pasta">
                <div class="recipe-info">
                    <h3>Spicy Garlic Linguini</h3>
                    <p>By David Carlis</p>
                </div>
            </div>
            <div class="recipe-card">
                <div class="fav-icon">⭐</div>
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pizza-with-salami-and-cheese.jpg" alt="Pizza">
                <div class="recipe-info">
                    <h3>Cheesy Pepperoni</h3>
                    <p>By Marco Polo</p>
                </div>
            </div>
        </div>
    </main>

    <nav class="bottom-nav">
        <div class="nav-item active"><img src="./image/home_icon.png" alt=""></div>
        <div class="nav-item"><img src="./image/search_icon.png" alt=""></div>
        <div class="nav-item"><img src="./image/star_icon.png" alt=""></div>
        <div class="nav-item"><img src="./image/user_icon.png" alt=""></div>
    </nav>
    `;
}