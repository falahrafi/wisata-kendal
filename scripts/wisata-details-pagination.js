function pageOne() {
   var page_1 = "#page-1";
   $('.selection').hide()
   $(page_1).show()
}

$(function() {
   $('#selector').pagination({
         items: 3,
         itemsOnPage: 1,
         cssStyle: 'wisatakendal-theme',
         currentPage: 1,
         onPageClick: function(pageNumber){test(pageNumber)},
         onInit: function(){pageOne()},

   });
});

function test(pageNumber){
   var page="#page-"+pageNumber;
   $('.selection').hide()
   $(page).show()
}