from flask import Flask, render_template, request
from twilio.rest import Client
from flask import Flask, render_template, request, url_for

app = Flask(__name__)

# Twilio account credentials
account_sid = 'AC1e69c2b9ebdda2c84f6222290cc64ecb'
auth_token = '42cd3908eb80a38c7efea7b2c45d0ec3'
client = Client(account_sid, auth_token)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/submit_phone_number', methods=['POST'])
def submit_phone_number():
    phone_number = request.form['phone_number']
    message = client.messages.create(
        body='The NTA results have been released. Check them out now!',
        from_='<your_twilio_phone_number>',
        to=phone_number
    )
    return 'Success!'

if __name__ == '__main__':
    app.run(debug=True)
