<template>
    <div class="container">
        <div class="top">
            <div class="name">
                <h1>Привет</h1>
                <img src="/public/pic.png" alt="">
                <h1>я Тим</h1>
            </div>
            <p>Продуктовый дизайнер, создающий пользовательский опыт и дизайн, которым приятно пользоваться. Живу в
                Туркменистане.</p>
        </div>
        <div class="buttons">
            <button>Резюме</button>
            <button>Telegram</button>
        </div>
    </div>
</template>

<style>
h1 {
    font-size: 56px;
    font-weight: 600;
}

p {
    font-size: 20px;
    line-height: 1.5;
}

.container {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 70px;
}

.name {
    display: flex;
    align-items: center;
    gap: 1rem;
}

img {
    width: 60px;
}

.top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>