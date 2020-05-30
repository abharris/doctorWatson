$(document).ready(function() {
    var json; 

    $.getJSON("data.json", function(data) {
        json = data;
        // console.log("hi");

        let final = false;
        
        $.each(data.sentences_tone, function(key, val) {

            setTimeout(function () {
                // console.log("STARTING")
                // console.log(data.sentences_tone.length);
                // console.log(val);
                
                let text = val.text.replace('\'', '');
                // console.log(text);
    
    
                if (val.sentence_id % 2 == 0){
                    $(".chats").append("<div class='outgoing' id=\'" +val.sentence_id+ "'\>");
                    $("#" + val.sentence_id).append("<div class='bubbleOut'>" +text.toString()+ "</div>");
                    $(".chats").append("</div>");
                }
                else {
                    $(".chats").append("<div class='incoming' id=\'" +val.sentence_id+ "'\>");
                    $("#" + val.sentence_id).append("<div class='bubbleIn'>" +text+ "</div>");
                    $.each(val.tones, function(k, v) {
                        console.log("new emotion");
                        console.log(v);
                        console.log(v.score);
                        console.log(v.tone_name);
                        $("#" + val.sentence_id).append("<div class='.analysis'>\ Watson believes this text is " +v.tone_name+ " with a score of " + v.score + "\</div>");
                    });
                    $(".chats").append("</div>");
                }

                if(key === (data.sentences_tone.length-1)) {
                    $.each(data.document_tone.tones, function(k, v) {
                        $(".container").append("<div class='results'>Watson believes this conversation had an overall tone of "+v.tone_name+" with a score of "+v.score +"</div>");
                    });
    
                }
    
            }, key*2000);
            
        });

        // if(final) {
        // }
        

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