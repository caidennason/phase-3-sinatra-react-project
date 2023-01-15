class Song < ActiveRecord::Base
    belongs_to :songwriter
    belongs_to :album
    has_many :reviews
end