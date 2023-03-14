export class View {
    constructor() {
      this.$newsSection = $("#section-news");
      this.$aboutSection = $("#section-about");
      this.$undergraduateSection = $("#section-undergraduate");
      this.$graduateSection = $("#section-graduate");
      this.$coopSection = $("#myTable");
    }
  
    renderSpinner() {
      this.$newsSection.html('<img src="media/gears.gif" id="spinner"/>');
    }
  
    // renderNewsSection(data) {
    //   this.$newsSection.html(""); //removes any previous content (like spinner)
    //   let $newsDiv = $('<div id="div-accordion"></div>');
  
    //   $.each(data.older, (index, item) => {
    //     let $newsItem = $(
    //       `<h2><b>${item.date}:</b>${item.title}</h2><div><p>${item.description}</p></div>`
    //     );
    //     $newsDiv.append($newsItem);
    //   });
  
    //   $newsDiv.accordion({
    //     collapsible: true,
    //     heightStyle: "content"
    //   });
  
    //   this.$newsSection.append($newsDiv);
    // }

    renderAboutSection(data){
        this.$aboutSection.html("");
        this.$aboutSection.append(`<h1>${data.title}</h1>`);
        this.$aboutSection.append(`<p>${data.description}</p>`);
        this.$aboutSection.append(`<h5>${data.quoteAuthor}</h5>`);
        this.$aboutSection.append(`<h5>${data.quote}</h5>`);
    }


    renderUndergraduateSection(data){
        // console.log(data.undergraduate);
        this.$undergraduateSection.html("");
        let $undergraduateDiv = $('<div></div>');

        $.each(data.undergraduate, (index, item) => {
            let $undergraduateItem = $(
                `<h1>${item.degreeName}: ${item.title}</h1><div><p>${item.description}</p><ul><li>${item.concentrations}</li></ul></div>`
            );

           $undergraduateDiv.append($undergraduateItem);
        });

        this.$undergraduateSection.append($undergraduateDiv);
    }

    renderGraduateSection(data){
        console.log(data.graduate);
        let $graduateDiv = $('<div></div>');

        $.each(data.graduate, (index, item) => {
            let $graduateItem = $(
                `<h1>${item.degreeName}: ${item.title}</h1><div>
                <p>${item.description}</p><ul><li>${item.concentrations}</li></ul></div>`
            );

            $graduateDiv.append($graduateItem);

        });

        this.$graduateSection.append($graduateDiv);

    }

    renderCoopTableSection(data){
        let $coopTableDiv = $('#myTable');

        $.each(data.coopTable, (index, item) => {
            let $employmentItem = $(
                `<th>${data.employer}</th><th>${data.degree}</th>`
            );

            $coopTableDiv.append($employmentItem);
        });

        this.$coopSection.append($employmentItem);
    }

  }
  