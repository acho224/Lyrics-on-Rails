// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



// function sendParams(q){
//     console.log(q)
//   $.ajax({
//     url: '/lyrics',
//     type: 'get',
//     data: {
//       artist: 'artist',
//       song: 'song'
//     },
//     contentType: 'json'
//   });
// }

// sendParams("<%= params[:artist],params[:song].to_json.html_safe %>");


























// function getLyrics(){

//   $.get('/lyrics').done(function(data){
//     console.log(data)
//     renderLyrics(data)
//   })
// }

function renderLyrics(data){
    $('#lyrics').empty();
    let $div = $('<div class="search_results">')
    let $image = $('<img class="poster">').attr('src', data.GetLyricResult.LyricCovertArtUrl)
    let $artist = $('<p>').html("<span class='bold'>Artist</span>: " + data.GetLyricResult.LyricArtist)
    let $song = $('<p>').html("<span class='bold'>Song Title</span>: " + data.GetLyricResult.LyricSong)
    let $lyrics = $('<a target="_blank">').attr("href", data.GetLyricResult.LyricUrl).text("Get Lyrics Here")

    $div.append($image, $artist, $song,$lyrics)
    $('#lyrics').append($div)
}

$(document).ready(function() {
  // $('.search_lyrics').submit(function(){
  //   // getLyrics()
  //   return false
  // })
});
