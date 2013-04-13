from flask import Flask, render_template, Response, jsonify
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/ajaxex')
def ajaxex():
	return render_template('ajaxcontent.html')

@app.route('/ajaxxml')
def ajaxxml():
    xml = """
    <root>
    <name surname='S'>Arjun</name>
    </root>"""
    return Response(xml, mimetype='text/xml')        

@app.route('/ajaxjson')
def ajaxjson():
    resp = jsonify({'Resultset' :{'Result':{ "Name" : "Arjun",
                                             "Country" : "India", 
                                             "favlanguages" : ["javascript", "python", "php"]}}})
    return resp
    
if __name__ == '__main__':
    app.run()