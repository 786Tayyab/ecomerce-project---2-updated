document.getElementById('support-form').addEventListener
('submit', function(event)
 {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    this.reset();
});

//***********************grocery******************************** */

let currentSlide = 0;

function showSlide(index) 
{
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) 
    {
        currentSlide = 0;
    } 
    else if (index < 0) 
    {
        currentSlide = slides.length - 1;
    } 
    else 
    {
        currentSlide = index;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

window.addEventListener('resize', () => showSlide(currentSlide));
showSlide(currentSlide);
setInterval(nextSlide, 3000);

//*************************clothing************************************* */

let currentSlidec = 0;

function showSlidec(index) 
{
    const slidesc = document.querySelectorAll('.slidec');
    if (index >= slidesc.length) 
    {
        currentSlidec = 0;
    } 
    else if (index < 0) 
    {
        currentSlidec = slidesc.length - 1;
    } 
    else 
    {
        currentSlidec = index;
    }
    const slidecWidth = slidesc[0].clientWidth;
    document.querySelector('.slidesc').style.transform = `translateX(${-slidecWidth * currentSlidec}px)`;
}
function nextSlidec() {
    showSlidec(currentSlidec + 1);
}

function prevSlidec() {
    showSlidec(currentSlidec - 1);
}

window.addEventListener('resize', () => showSlidec(currentSlidec));
showSlidec(currentSlidec);
setInterval(nextSlidec, 3000);

//***********************cosmetic******************************** */

let currentSlidem = 0;

function showSlidem(indexm) 
{
    const slidesm = document.querySelectorAll('.slidem');
    if (indexm >= slidesm.length) 
    {
        currentSlidem = 0;
    } 
    else if (indexm < 0) 
    {
        currentSlidem = slidesm.length - 1;
    } 
    else 
    {
        currentSlidem = indexm;
    }
    const slidemWidth = slidesm[0].clientWidth;
    document.querySelector('.slidesm').style.transform = `translateX(${-slidemWidth * currentSlidem}px)`;
}

function nextSlidem() {
    showSlidem(currentSlidem + 1);
}

function prevSlidem() {
    showSlidem(currentSlidem - 1);
}

window.addEventListener('resize', () => showSlidem(currentSlidem));
showSlidem(currentSlidem);
setInterval(nextSlidem, 3000);
