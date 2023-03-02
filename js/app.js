/**
 * The ajax() method performs an HTTP request. It returns the jQuery XMLHttpRequest 
 * (jqXHR) object, which is a superset (implements the Promise interface, ) of the 
 * browser's native XMLHttpRequest object. It contains, for example, responseText 
 * & responseJSON properties, as well as callback options such as jqXHR.done() 
 * & jqXHR.fail(). The ajax() method is commonly used as:
 *      $.ajax({}).always(()=>{}).done(()=>{}).fail(()=>{});
 * where:
 *      - jqXHR.always(( data|jqXHR, textStatus, jqXHR|errorThrown ) => { }); 
 *        fires when the request finishes, whether in failure or success. 
 *      - jqXHR.done(( data, textStatus, jqXHR ) => { }); 
 *        is invoked, if the request succeeds. It receives the returned data, 
 *        a string containing the success code, and the jqXHR object.
 *      - jqXHR.fail(( jqXHR, textStatus, errorThrown ) => { });
 *        is invoked, if the request fails. It receives the jqXHR, a string 
 *        indicating the error type, and an exception object if applicable.
 
 * In response to a successful request, the callback's arguments are:
 *        data, textStatus, and the jqXHR object. 
 * For failed requests the arguments are: 
 *        the jqXHR object, textStatus, and errorThrown. 
 *        
 * See {@link https://api.jquery.com/jQuery.ajax|jQuery AJAX} for more information.
 *        
 * @type {Object} A set of key/value pairs that configure the Ajax request.
 * @returns {jqXHR} A superset of the XMLHTTPRequest object that implements the Promise interface. 
 */

$.ajax({
    method: "GET",
    url: "proxy.php",
    data: {path: "/news"},
    timeout: 10000,
    dataType: "json",
    beforeSend: ()=>{
        console.log("BEFORE SEND");
    }
}).always(()=>{
    console.log("ALWAYS");
    $('#spinner').remove();
}).done((json)=>{
    console.log("DONE");
    $.each(json.older, (index, newsItem)=>{
        $('#section1').append(`
            <h2>${newsItem.date}</h2>
            <p><b>${newsItem.title}</b></p>
            <p>${newsItem.description}</p>`);
    });
}).fail(()=>{
    console.log("FAIL");
});