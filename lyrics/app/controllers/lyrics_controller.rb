class LyricsController < ApplicationController

  def index

    url = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=#{params[:artist]}&song=#{params[:song]}"
    # url = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=prince&song=controversy"

    response = HTTParty.get(url)
    #converts XML to JSON
    parsed_body = Crack::XML.parse(response.body)

    # render json: parsed_body
    puts parsed_body #show api call in ruby console

    # set data to ruby variable
    @lyric_request = parsed_body['GetLyricResult'];

    artist = CGI.escape(@lyric_request['LyricArtist'])
    song = CGI.escape(@lyric_request['LyricSong'])
    lyics = CGI.escape(@lyric_request['Lyric'])

    @lyrics_url = "#{artist}/#{song}/#{lyics}"
    # @result_lyrics = @lyric_request['Lyric'];
    # byebug
    # in order to use js file for ajax request (index.js.erb file to match the def index  method)
    respond_to do |format|
      format.js
    end

  end

end
