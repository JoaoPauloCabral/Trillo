// Updates the year
const copyrightYearEl = document.querySelector('.legal__year');
const currentYear = new Date().getFullYear();
copyrightYearEl.textContent = currentYear;
