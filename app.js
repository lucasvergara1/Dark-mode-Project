const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles')

toggleBtn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles.map(()=>{
const {title, date, length, snippet} = article
//format date

return `<article class="post">
        <h2> ${title}</h2>
        <div class="post-info">
        <span>${date}</span>
        <span>${length} min read</span>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Voluptates rerum deleniti illum perspiciatis vel, eaque 
          recusandae delectus excepturi placeat accusamus, 
          repellat veniam explicabo tempore earum alias sit 
          numquam quae unde.</p>

      </article>`;

});

