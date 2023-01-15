class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "hi" }.to_json
  end

  get '/reviews' do
    # get all the games from the database
    review = Review.all
    # return a JSON response with an array of all the game data
    review.to_json
  end

end
