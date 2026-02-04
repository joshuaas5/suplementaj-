import json
f=open('data/artigos.json','r',encoding='utf-8')
a=json.load(f)
f.close()
m={'a':'a','a':'a','a':'a','a':'a','e':'e','e':'e','e':'e','i':'i','i':'i','o':'o','o':'o','o':'o','u':'u','u':'u','c':'c'}
for art in a:
    old = art['slug']
    new = ''.join(m.get(c,c) for c in old)
    if old != new:
        print(old,'->',new)
        art['slug'] = new
f=open('data/artigos.json','w',encoding='utf-8')
json.dump(a,f,ensure_ascii=False,indent=2)
f.close()
print('Done')

