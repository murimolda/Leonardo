document.addEventListener("DOMContentLoaded", function () {


// MENU SANDWICH //
var categoryMenu = document.getElementById('categoryMenu')
var categoryNav = document.getElementsByClassName("category-menu-item");
var categorySandwich = document.getElementById('categorySandwich');

for (i=0; i < categoryNav.length; i++) {
  categoryNav[i].onclick =  function(){
    categoryMenu.style.display = 'none';
    categorySandwich.checked=false;
  }
};

categorySandwich.onclick = function(){
  if (categoryMenu.style.display != 'block'){
    categoryMenu.style.display = 'block';
  }
  else{
    categoryMenu.style.display = 'none';
  }
};

// FILTER SANDWICH //
var filterMenu = document.getElementById('filterMenu')
var filterNav = document.getElementsByClassName('filter-menu-item');
var filterSandwich = document.getElementById('filterSandwich');
var filterButton = document.getElementById('filterButton');
var filterTypeArrow = document.getElementById('filterTypeArrow');
var filterTypeMenu = document.getElementById('filterTypeMenu');
var filterTypeHeader = document.getElementById('filterTypeHeader');
var filterBrandArrow = document.getElementById('filterBrandArrow');
var filterBrandMenu = document.getElementById('filterBrandMenu');
var filterBrandHeader = document.getElementById('filterBrandHeader');
var darkBodyBackground = document.getElementById('body');

for (i=0; i < filterNav.length; i++) {
  filterNav[i].onclick =  function(){
    filterMenu.style.display = 'none';
    filterSandwich.checked=false;
  }
};

filterSandwich.onclick = function(){
  if (filterMenu.style.display != 'block'){
    filterMenu.style.display = 'block';
    darkBodyBackground.classList.add('filter-menu-open');
  }
  else{
    filterMenu.style.display = 'none';
    darkBodyBackground.classList.remove('filter-menu-open');
  }
};

filterButton.onclick = function(){
  if (filterMenu.style.display == 'block' && darkBodyBackground.classList.contains('filter-menu-open')){
    filterMenu.style.display = 'none';
    darkBodyBackground.classList.remove('filter-menu-open');
  }
};

filterTypeArrow.onclick = function(){
  if (filterTypeMenu.style.display != 'block'){
    filterTypeMenu.style.display = 'block';
    filterTypeHeader.classList.add('type-filter-header-open');
  }
  else{
    filterTypeMenu.style.display = 'none';
    filterTypeHeader.classList.remove('type-filter-header-open');
  }
};

filterBrandArrow.onclick = function(){
  if (filterBrandMenu.style.display != 'block'){
    filterBrandMenu.style.display = 'block';
    filterBrandHeader.classList.add('type-filter-header-open');
  }
  else{
    filterBrandMenu.style.display = 'none';
    filterBrandHeader.classList.remove('type-filter-header-open');
  }
};




});

















