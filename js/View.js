export class View {
    constructor() {
      this.$newsSection = $("#section-news");
    }
  
    renderSpinner() {
      this.$newsSection.html('<img src="media/gears.gif" id="spinner"/>');
      //select all sections which id starts with 'section-'
      //$('[id^=section-]').html('<img src="media/gears.gif" id="spinner"/>');
    }
  
    renderNewsSection(data) {
      this.$newsSection.html(""); //removes any previous content (like spinner)
      let $newsDiv = $('<div id="div-accordion"></div>');
  
      $.each(data.older, (index, item) => {
        let $newsItem = $(
          `<h2><b>${item.date}:</b>${item.title}</h2><div><p>${item.description}</p></div>`
        );
        $newsDiv.append($newsItem);
      });
  
      $newsDiv.accordion({
        collapsible: true,
        heightStyle: "content"
      });
  
      this.$newsSection.append($newsDiv);
    }
  }
  