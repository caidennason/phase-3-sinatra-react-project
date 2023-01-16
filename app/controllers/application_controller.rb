class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # # Add your routes here
  # get "/" do
  #   { message: "hi" }.to_json
  # end

  get '/songwriters' do 
    songwriter = Songwriter.all
    songwriter.to_json(include: { songs: {include: :reviews}})
  end

  get '/albums' do 
    album = Album.all 
    album.to_json 
  end

  get '/reviews' do 
    review = Review.all 
    review.to_json 
  end

end
