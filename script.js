const header = document.getElementById("header");
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date =document.getElementById('date');


setTimeout(() => {
    header.classList.remove('animated-bg');
    title.classList.remove('animated-bg');
    excerpt.classList.remove('animated-bg');
    profileImg.classList.remove('animated-bg');
    name.classList.remove('animated-bg');
    date.classList.remove('animated-bg');
    header.innerHTML = `
    <img src="https://s1.1zoom.ru/big0/430/Laptops_Smartphone_Notebooks_Table_568319_1280x853.jpg" alt="">
    `;
    title.innerHTML = `Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptatum.`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
    name.innerHTML = `John Snow`;
    date.innerHTML = `Apr 18, 2023`;
}, 3000)