from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/ajaxex')
def ajaxex():
	return render_template('ajaxcontent.html')

if __name__ == '__main__':
    app.run()