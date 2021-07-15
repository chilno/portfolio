class PortfolioController < ApplicationController
  def index
  	puts '-----------------------------------------'
  end

  def create
  	@message = Message.create(msg_params)
  	unless @message.errors.any?
		MessageMailer.new_message(@message).deliver_now
  		render json: { :success =>  "Your Message was Successfully sent! I'll be in touch!"}
  	else
  		flash[:errors] = { :errors => @message.errors.full_messages}
  		render json: flash[:errors]
  	end
  end

  private

  def msg_params
  	params.require(:msg).permit(:name, :email, :subject, :conetent)
  end

end
