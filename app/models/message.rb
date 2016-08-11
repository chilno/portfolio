class Message < ActiveRecord::Base
	validates :name, :email, :subject, :conetent, presence: true
	validates :name, length: {minimum: 2}
	validates :conetent, length: {minimum: 10, maximum: 500}
end
