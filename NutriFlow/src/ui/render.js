export  function renderStarPage() {
    const page=document.getElementById("bodyP")
    page.innerHTML=` <main class="welcome-screen">
        <div class="logo-container">
            <img src="./image/home_1.png" alt="Logo App" class="logo">
        </div>

        <div class="lower-image">
            <img src="./image/home_2.png" alt="Burger" class="burger">
        </div>

        <div class="btn-Next">
            <button class="btn-next">Next</button>
        </div>
    </main>`
}

export function renderHomePage(){
    const page = document.getElementById("homeP")
    page.innerHTML=`
    `
}
