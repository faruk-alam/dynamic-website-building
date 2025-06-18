 const newsHeadline = document.getElementById('newsHeadline');

fetch('http://localhost:8000/newsfeed')
  .then(response => response.json())
  .then(data => {
    data.forEach(article => {
        const title =  '<h3>' + article.title + '</h3>';
        newsHeadline.insertAdjacentHTML('beforeend', title);
        newsHeadline.className = 'title-style';
    });
  })
    .catch(error => console.error('Error fetching data:'));