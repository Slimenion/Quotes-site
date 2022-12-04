import json

posts = {}
data = []
with open("DB-last-and-correct.txt", 'r', encoding='UTF-8') as f:
    for line in f:
        data.append(line)
new_data = []
with open('posts.json', 'w', encoding='UTF-8') as fp:
    for el in data:
        el = el.replace('"', "'")
        el = el.split('\t')
        post = {
            'quote': el[0],
            'author': el[1]
        }
        new_data.append(post)
    json.dump(new_data, fp, indent=4, sort_keys=False, ensure_ascii=False, separators=(',', ': '))
