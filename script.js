
function showFormReview() {
    let formReview = document.getElementById('formReview');
    if (formReview.style.display === 'none' || formReview.style.display === '') {
        formReview.style.display = 'flex';
    } else {
        formReview.style.display = 'none';
    }
}

function showBuyForm() {
    let buyForm = document.getElementById('buyForm');
    if (buyForm.style.display === 'none' || buyForm.style.display === '') {
        buyForm.style.display = 'flex';
    } else {
        buyForm.style.display = 'none';
    }
}

function successMessage() {
    const fullName = document.getElementById('name');
    const form = document.getElementById('form');
   
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let successMessage = document.getElementById('successMessage');
        successMessage.textContent = fullName.value + ", благодарим Ви за поръчката!";
        successMessage.style.display = 'block';

        document.getElementById('form').reset();
        document.getElementById('buyForm').style.display = 'none';
    })

}

function messageNewsletter() {
    const name = document.getElementById('newsletter-name');
    const emailAddress = document.getElementById('newsletter-email');
    const form = document.getElementById('newsletter-form');

    let successMessageNewsLetter = document.getElementById('successMessageNewsLetter');
     successMessageNewsLetter.textContent = "Благодарим Ви!";
      successMessageNewsLetter.style.display = 'block';

        document.getElementById('newsletter-form').reset();
    

}

function addReview() {
  
    const name = document.getElementById('review-name').value;
    const title = document.getElementById('title').value;
    const text = document.getElementById('review').value;
    const rating = document.getElementById('review-rating').value;
    const date = new Date().toLocaleDateString();

    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    const reviewLeft = document.createElement('div');
    reviewLeft.classList.add('review-left');
    const h4Element = document.createElement('h4');
    h4Element.textContent = name;
    const span = document.createElement('span');
    span.textContent = date;

    reviewLeft.appendChild(h4Element);
    reviewLeft.appendChild(span);

    const reviewRight = document.createElement('div');
    reviewRight.classList.add('review-right');
    const h3 = document.createElement('h3');
    h3.textContent = title;

    const stars = document.createElement('div');
    stars.classList.add('stars');
    for (let i = 0; i < rating; i++) {
        const star = document.createElement('i');
        star.classList.add('bx', 'bxs-star');
        stars.appendChild(star);
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    reviewRight.appendChild(h3);
    reviewRight.appendChild(stars);
    reviewRight.appendChild(paragraph);

    reviews.appendChild(reviewLeft);
    reviews.appendChild(reviewRight);

    const parent = document.getElementById('c-reviews-id');
    const secondChild = parent.children[1];
    parent.insertBefore(reviews, secondChild);

    document.getElementById('review-name').value = '';
    document.getElementById('title').value = '';
    document.getElementById('review').value = '';
    document.getElementById('review-rating').value = '';
    
}