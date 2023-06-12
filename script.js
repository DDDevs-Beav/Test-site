// Slideshow Functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 2000);

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('search-input');
  var searchButton = document.getElementById('search-button');
  var searchResults = document.getElementById('search-results');
  var suggestionList = document.getElementById('suggestion-list');

  // Search input keyup event handler
  searchInput.addEventListener('keyup', function(event) {
    var keyword = searchInput.value.trim();
    if (keyword.length > 0) {
      var matchingPages = getMatchingPages(keyword);
      showSuggestions(matchingPages);
    } else {
      hideSuggestions();
    }
    
    if (event.key === 'Enter') {
      var firstSuggestion = suggestionList.querySelector('.search-suggestion');
      if (firstSuggestion) {
        window.location.href = firstSuggestion.dataset.url;
      }
    }
  });

  // Search button click event handler
  searchButton.addEventListener('click', function() {
    var keyword = searchInput.value.trim();
    if (keyword.length > 0) {
      var matchingPages = getMatchingPages(keyword);
      if (matchingPages.length > 0) {
        window.location.href = matchingPages[0].url;
      }
    }
  });

  // Suggested results click event handler
  suggestionList.addEventListener('click', function(event) {
    var clickedResult = event.target;
    if (clickedResult.classList.contains('search-suggestion')) {
      var pageUrl = clickedResult.dataset.url;
      window.location.href = pageUrl;
    }
  });

  // Show suggested results
  function showSuggestions(suggestedPages) {
    suggestionList.innerHTML = '';
    suggestedPages.forEach(function(page) {
      var suggestionItem = document.createElement('li');
      suggestionItem.classList.add('search-suggestion');
      suggestionItem.dataset.url = page.url;
      suggestionItem.textContent = page.title;
      suggestionList.appendChild(suggestionItem);
    });
    searchResults.style.display = 'block';
  }

  // Hide suggested results
  function hideSuggestions() {
    suggestionList.innerHTML = '';
    searchResults.style.display = 'none';
  }

  // Get matching pages based on keyword
  function getMatchingPages(keyword) {
    var pages = [
      { title: 'Home', url: 'index.html' },
      { title: 'About', url: 'page2.html' },
      { title: 'Socials', url: 'page3.html' },
      { title: 'Discord', url: 'page3.html' },
      { title: 'Twitter', url: 'page3.html' },
      { title: 'Reddit', url: 'page3.html' },
      { title: 'How is Diamond Beaver powered', url: 'page2.html' },
      { title: 'How to become Diamond Beaver', url: 'page2.html' },
      { title: 'How to become a King Diamond Beaver', url: 'page2.html' },
      { title: 'Blockchain', url: 'page2.html' }
      // Add more pages as needed
    ];

    return pages.filter(function(page) {
      return page.title.toLowerCase().includes(keyword.toLowerCase());
    });
  }
});
