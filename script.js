

    $.getJSON("https://spreadsheets.google.com/feeds/list/1pG-K6QhY8kfJE4KXF3F9fR8NKmusL5nXhmVcs76H_hA/od6/public/values?alt=json", function (data) {

        var sheetData = data.feed.entry;
        var i;

        for (i = 0; i < sheetData.length; i++) {
            var title = JSON.stringify(data.feed.entry[i]["gsx$title"]["$t"]);
            title = title.replace(/\"/g, "");
            var content = JSON.stringify(data.feed.entry[i]["gsx$bulletincontent"]["$t"]);
            content = content.replace(/\"/g, "");
            var alertType = JSON.stringify(data.feed.entry[i]["gsx$alerttype"]["$t"]);
            alertType = alertType.replace(/\"/g, "");
            var imageIcon = JSON.stringify(data.feed.entry[i]["gsx$imageicon"]["$t"]);
            imageIcon = imageIcon.replace(/\"/g, "");
            var output = htmlOutput(title, content, alertType, imageIcon);
        };

        


        function htmlOutput(titleOfPost, contentOfPost, postAlertType, postImage) {

            var bullitenOutputHTML = '<div class="card" style="width: 20rem;">' +
                '<img class="card-img-top" src ="' + postImage + '" alt = "Card image cap" > ' +
                '<div class="card-body"> ' +
                '<h5 class="card-title">' + titleOfPost + '</h5>' +
                '<p class="card-text">' + contentOfPost + '</p>' +
                '</div>' +
                '<div class="card-footer text-muted">' + postAlertType;
            $('#dynamicBulletin').append(bullitenOutputHTML);
            return bullitenOutputHTML;

        }


        

        // document.getElementById('dynamicBulletin').innerHTML += output;


    });






