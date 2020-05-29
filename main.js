$(document).ready(function() {
    var json; 

    $.getJSON("data.json", function(data) {
        json = data;
        // console.log("hi");

        $.each(data.sentences_tone, function(key, val) {
            // console.log("STARTING")
            // console.log(val);
            console.log(val.sentence_id);
            let text = val.text.replace('\'', '');

            if (val.sentence_id % 2 == 0){
                // console.log("replacing")
                console.log(val.sentence_id, val.text);
                $(".chats").append("<div class='outgoing'></div>");
                $(".outgoing").append("<div class='bubbleOut'>\'" +text+ "\'</div>");

            }
            else {
                console.log(val.sentence_id, val.text);
                $(".chats").append("<div class='incoming'></div>");
                $(".incoming").append("<div class='bubbleIn'>\'" +text+ "\'</div>");
                $(".incoming").append("<div class='.analysis'>\ Watson believes this text is " +val.tones[0].tone_name+ " with a score of " + val.tones[0].score + "\</div>");
            }
        });

        // score = data.images[0].classifiers[1].classes[0].score;
        // img_url = data.images[0].image;
        
        // if(score > .5) {
        //     $('#results').append("<h1 class='resultText'>" + "This is a mountain!" + "</h1>")
        // }
        // else {
        //     $('#results').append("<h1 class='resultText'>" + "This is not a mountain!" + "</h1>")
        // }

        // $('#results').append("<img src=\'" + img_url + "\'>")

        // if(score > .5) {
        //     $("#results").append(
        //         "<h1 class='resultText'>" + "Mountain Facts!" + "</h1>"
        //     )

        //     $("#results").append(
        //         "<ul class=\'mountainFacts'\></ul>"
        //     )

        //     $(".mountainFacts").append(
        //         "<li>1. The largest range of mountains is in the Alantic Ocean</li><li>2. Mountains cover one-fifth of the earth\'s land surface, and occur in 75 percent of the world\'s countries</li><li>3. Mountains are home to approximately one-tenth of the world\'s people</li>"
        //     )

        //     $("#results").append(
        //         "<a href=\'http://www.primaryhomeworkhelp.co.uk/mountains.htm\'\>Source!</a>"
        //     )
        // }
        
    });

});