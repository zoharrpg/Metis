def post_entity_2_dict(entity):
    return {
        "title": entity['title'],
        "img": entity['img'],
        "content": entity['content'],
        "up": entity['up'],
        "down": entity['down'],
        "id": entity.id
    }
