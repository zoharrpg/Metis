from google.cloud import datastore
from google.oauth2 import service_account

def get_client():
    # Note that if we want to specify a project here, we could do it like this:
    # return datastore.Client('your-project-id')
    # Calling Client() with no argument will access the environment variables
    # for your project - which will be fine for your deployed application.
    credentials = service_account.Credentials.from_service_account_file(
        '/Users/muma/Downloads/metis-330918-8049110bbb6f.json')
    # return datastore.Client('metis-330918')
    return datastore.Client('metis-330918', credentials=credentials)


def create_post():
    client = get_client()
    key = client.key("posts")
    return datastore.Entity(key)


def update_post(post):
    client = get_client()
    client.put(post)


def delete_post(id):
    client = get_client()
    key = client.key('posts', int(id))
    client.delete(key)


def get_posts():
    result = []
    client = get_client()
    query = client.query(kind='posts')
    for entity in query.fetch():
        result.append(entity)
    return result
