
//  Readying the document.
$(document).ready(function () {
    // Getting JSON link.
    $.getJSON("https://spreadsheets.google.com/feeds/list/1pG-K6QhY8kfJE4KXF3F9fR8NKmusL5nXhmVcs76H_hA/od6/public/values?alt=json", function (data) {

        // I passed "Data" in the json link, and I made the feed.entry = sheetData.
        var sheetData = data.feed.entry;
        
        // counter variable.
        var i;

        // ForLoop that'll cycle through google sheets JSON
        for (i = 0; i < sheetData.length; i++) {

            // Within the jSON text, the columns are labeled as "gsx$[...]"
            // So I went ahead and grabbed that information and stringified it so it became a string.
            // Then I replaced any quotations that would make the text look weird.
            var title = JSON.stringify(data.feed.entry[i]["gsx$title"]["$t"]);
            title = title.replace(/\"/g, "");

            var content = JSON.stringify(data.feed.entry[i]["gsx$bulletincontent"]["$t"]);
            content = content.replace(/\"/g, "");
            
            var alertType = JSON.stringify(data.feed.entry[i]["gsx$alerttype"]["$t"]);
            alertType = alertType.replace(/\"/g, "");
            
            var imageIcon = JSON.stringify(data.feed.entry[i]["gsx$imageicon"]["$t"]);
            imageIcon = imageIcon.replace(/\"/g, "");

            var date = JSON.stringify(data.feed.entry[i]["gsx$postdate"]["$t"]);
            date = date.replace(/\"/g, "");

            // Passing the information into a function.
            var output = htmlOutput(title, content, alertType, imageIcon, date);
        };

        

        // Display function that takes four parameters of texts and image.
        function htmlOutput(titleOfPost, contentOfPost, postAlertType, postImage, date) {

            // HTML markup to output onto webpage.
            var bullitenOutputHTML = '<div class="card" style="width: 20rem;">' +
                '<img class="card-img-top" src ="' + postImage + '" alt = "Card image cap" > ' +
                '<div class="card-body"> ' +
                '<h5 class="card-title">' + titleOfPost + '</h5>' +
                '<p class="card-text">' + contentOfPost + '</p>' +
                '</div>' +
                '<div class="card-footer text-muted">' + postAlertType + "\nDate: " + date;
            
            // Locating the ID "dynamicBulletin", then hiding it, only to add it in again and fade it in for UX.
            $('#dynamicBulletin').hide().append(bullitenOutputHTML).fadeIn(1000);
            return;
        }
    });
});






