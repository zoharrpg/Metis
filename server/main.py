import json
import flask

from utils import db
from utils import post
from utils import r

app = flask.Flask(__name__)


@app.route('/create-post', methods=['POST'])
def create_post():
    title = flask.request.json['title']
    content = flask.request.json['content']
    img = flask.request.json['img']

    # TODO add handle error to create post
    try:

        post = db.create_post()

        post['up'] = 0
        post['down'] = 0
        post['title'] = title
        post['content'] = content
        post['img'] = img
        db.update_post(post)

    except:

        print("Handle error")

    return r.create_response('', 'success', '1')


@app.route('/get-all-posts', methods=['GET'])
def get_all_post():
    # TODO add handle error to get all posts
    try:
        posts = db.get_posts()
        response = []
        for p in posts:
            response.append(post.post_entity_2_dict(p))
    except:

        print("Handle error")

    return r.create_response(response, 'success', '1')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
