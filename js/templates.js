// $(function () { $("#navbarTemplate").load("/Petshop-project/js/navbar.html") })

    // Function to load HTML content from another file
    function loadHTMLContent(url, containerId) {
        $.get(url, function(data) {
          $('#' + containerId).html(data);
        }).fail(function(error) {
          console.error('Error fetching content:', error);
        });
      }
  
      // Load content from 'template.html' and render it
      loadHTMLContent('/Petshop-project/js/navbar.html', 'navbarTemplate');