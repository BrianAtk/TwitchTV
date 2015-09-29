var subscribers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "thebaseradio", ""];

$.each(subscribers, function (index, member) {

    $.get('https://api.twitch.tv/kraken/users/' + member, function (d) {
    })
        .then(function (d) {
            //getting streaming information

            getStream(d, member);
        })
      .fail(function (error) {

          var notAvail = "http://i173.photobucket.com/albums/w71/brian_atkins1/Not_available_icon.jpg"
          hlink = "<img src='" + notAvail + "'  id='twitchLogo'>" + member + ":" + error.statusText
          $(".messages").append("<div class='cardSize black'><br/>" + hlink + "</div>");
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

            hlink = "<img src='" + notAvail + "'  id='twitchLogo'>" + d.display_name + ":no longer streaming"
            $(".messages").append("<div class='cardSize black'><br/>" + hlink + "</div>");
        })
};

function appendRecord(streams, d, member) {
    var notAvail;
    var hlink;
    var imgSrc = d.logo;
    if (streams.stream != null) {
        // this user is online streaming now.  Display his streaming information

        hlink = "<img src='" + streams.stream.channel.logo + "' id='twitchLogo'>" + "<span class='black'><a target='_blank' href='http://www.twitch.tv/" + member + "'>" +
                  d.display_name + "</a>" + " - Viewers: " + streams.stream.viewers + " Playing:" + streams.stream.game + "</span>";
        $(".online").append("<div class='cardSize'>" + " <br/>" + hlink + "</div>");

    } else {
        // this user is not streaming now.  Display his profile information

        if (imgSrc !== null) {
            hlink = "<img src='" + imgSrc + "'  id='twitchLogo'>" + "<a target ='_blank' href= 'http://www.twitch.tv/" + d.display_name + "'>" + d.display_name + "</a>";
        } else {
            // no logo available.  Display default no icon logo

            notAvail = "http://i173.photobucket.com/albums/w71/brian_atkins1/Not_available_icon.jpg"
            hlink = "<img src='" + notAvail + "'  id='twitchLogo'>" + "<a target ='_blank' href= 'http://www.twitch.tv/" + member + "'>" + d.display_name + "</a>";
        }
        $(".offline").append("<div class='cardSize'><br/>" + hlink + "<div>");
    }
};



