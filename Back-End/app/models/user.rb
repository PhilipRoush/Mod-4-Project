class User < ApplicationRecord
    has_secure_password
    
    validates_presence_of :name 
    validates_uniqueness_of :name
    has_many :ratings
    has_many :reviews
    has_many :movies, through: :ratings
    has_many :movies, through: :reviews
end
