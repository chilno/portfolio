class PortfolioController < ApplicationController
  def index
  	puts '-----------------------------------------'
  end

  def create
  	@message = Message.create(msg_params)
  	unless @message.errors.any?
  		boot_twilio
  		sms = @client.messages.create(
		  from: '+16509841259',
		  to: '+14154251131',
		  body: 'Message from '+ msg_params['name']+', Subject '+msg_params['subject']+', Saying "'+msg_params['conetent']+'"'
		)
  		render json: { :success =>  "Your Message was Successfully sent! I'll be in touch!"}
  	else
  		flash[:errors] = { :errors => @message.errors.full_messages}
  		render json: flash[:errors]
  	end
  end

  private

  def boot_twilio
  	account_sid = Rails.application.secrets.twilio_sid
  	auth_token = Rails.application.secrets.twilio_token
  	@client = Twilio::REST::Client.new account_sid, auth_token
  end

  def msg_params
  	params.require(:msg).permit(:name, :email, :subject, :conetent)
  end

end
