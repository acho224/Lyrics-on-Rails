$(document).ready(function() {

function getLyrics(){

  $.get('/lyrics').done(function(data){
    console.log(data)
    renderLyrics(data)
  })
}

function renderLyrics(data){
    let $div = $('<div>')
    let $image = $('<img>').attr('src', data.GetLyricResult.LyricCovertArtUrl)
    let $artist = $('<p>').html("Artist: " + data.GetLyricResult.LyricArtist)
    let $song = $('<p>').html("Title: " + data.GetLyricResult.LyricSong)
    let $lyrics = $('<a target="_blank">').attr("href", data.GetLyricResult.LyricUrl).text("Get Lyrics Here")

    $div.append($image)
        .append($artist)
        .append($song)
        .append($lyrics)
    $('body').append($div)
}

// $('#search_lyrics').click(getLyrics)
  getLyrics();
});
