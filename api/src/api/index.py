import json
from flask import *
from flask_cors import *
from gnews import GNews



from gnews import GNews
import json



app = Flask(__name__)
google_news = GNews(max_results=9, period='7d')



@app.route("/")
def root():
    return "404 not found", 404


@app.route("/news" , methods=["GET"])
@cross_origin()
def news():
    news = google_news.get_top_news()
    news = json.dumps(news, indent=4)
    return news



@app.errorhandler(404)
def page_not_found(e):
    return "404 not found", 404


if __name__ == "__main__":
    app.run()