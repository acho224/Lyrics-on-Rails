class SavesController < ApplicationController


  def save_lyrics
    Lyric.create( { lyrics: params[:lyrics], title: params[:song], artist: params[:artist] })
  end

  def index
    @lyrics = Lyric.all
    # render :json => lyrics
  end

  def destroy
  end

end
