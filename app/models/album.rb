class Album < ActiveRecord::Base
    has_many :songs
    has_many :songwriters, through: :songs
    has_many :reviews, through: :songs
end