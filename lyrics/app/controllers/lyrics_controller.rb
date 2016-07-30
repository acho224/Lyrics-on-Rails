class LyricsController < ApplicationController

  def index
  url = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=prince&song=controversy"
  response = HTTParty.get(url)
  parsed_body = Crack::XML.parse(response.body)
 #converts XML to JSON
  render json: parsed_body
  end

end
