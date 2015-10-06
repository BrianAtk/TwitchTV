var subscribers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "thebaseradio", ""];

$.each(subscribers, function (index, member) {

    $.get('https://api.twitch.tv/kraken/users/' + member, function (d) {
    })
        .then(function (d) {
            //getting streaming information

            getStream(d, member);
        })
      .fail(function (error) {
          if (member) {
              var notAvail = "http://i173.photobucket.com/albums/w71/brian_atkins1/Not_available_icon.jpg"
              hlink = "<img src='" + notAvail + "'  id='twitchLogo'>" + member + ":" + error.statusText
              $(".messages").append("<div class='cardSize black " + member + "'>" + "<br/>" + hlink + "</div>");
          } else {
              $(".messages").append("<div class='cardSize black " + member + "'>" + "<br/>" + "***WARNING - Subscriber list contains a blank subscriber" + "</div>");
          }
      })

});

function getStream(d, member) {
    // get streaming information

    var notAvail;

    $.get('https://api.twitch.tv/kraken/streams/' + member, function (streams) {
    })
        .then(function (streams) {
            appendRecord(streams, d, member);
        })
        .fail(function (error) {
            // User is no longer streaming
            notAvail = "http://i173.photobucket.com/albums/w71/brian_atkins1/Old-antique-sign-on-doorway-that-says-gone-for-good.jpg"
            hlink = "<img src='" + notAvail + "' class='twitchLogo'" + ">" + d.display_name + ":no longer streaming"
            $(".messages").append("<div class='cardSize black " + member + "'>" + "<br/>" + hlink + "</div>");
        })
};

function appendRecord(streams, d, member) {
    var notAvail;
    var hlink;
    var imgSrc = d.logo;
    if (streams.stream != null) {
        // this user is online streaming now.  Display his streaming information

        hlink = "<img src='" + streams.stream.channel.logo + "' class='twitchLogo'>" + "<span class='black'><a target='_blank' href='http://www.twitch.tv/" + member + "'>" +
                  d.display_name + "</a>" + " - Viewers: " + streams.stream.viewers + " Playing:" + streams.stream.game + "</span>";

        $(".online").append("<div class='cardSize black " + member + "'>" + "<br/>" + hlink + "</div>");

    } else {
        // this user is not streaming now.  Display his profile information

        if (imgSrc !== null) {
            hlink = "<img src='" + imgSrc + "'  class='twitchLogo'>" + "<a target ='_blank' href= 'http://www.twitch.tv/" + d.display_name + "'>" + d.display_name + "</a>";
        } else {
            // no logo available.  Display default no icon logo

            notAvail = "http://i173.photobucket.com/albums/w71/brian_atkins1/Not_available_icon.jpg"
            hlink = "<img src='" + notAvail + "'  class='twitchLogo'>" + "<a target ='_blank' href= 'http://www.twitch.tv/" + member + "'>" + d.display_name + "</a>";
        }


        $(".offline").append("<div class='cardSize black " + member + "'>" + "<br/>" + hlink + "</div>");
    }

};


function doSearch() {
    var searchString = $(".searchText").val();

    if (searchString) {
        // loop through the entire list of users and either hide or show them based on what they are searching for
        $.each(subscribers, function (index, member) {
            whichId = "." + member;
            // see if this member matches the search string
            if (member.indexOf(searchString) >= 0) {

                $(whichId).show();
            } else {
                $(whichId).hide();

            }
        });


    } else {
        $(".textMessage").text("Please enter search string");
    }

}


$('.searchButton').click(function () {
    $(".textMessage").text("");
    doSearch();
});

$('.clearButton').click(function () {
    $(".searchText").val("");
    $(".textMessage").text("");
    $.each(subscribers, function (index, member) {
        whichId = "." + member;
        $(whichId).show();

    });
    
});
