import json


def create_response(response, state, code):
    return json.dumps({
        "code": code,
        "state": state,
        "data": response
    })
