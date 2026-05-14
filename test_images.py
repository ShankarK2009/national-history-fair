import urllib.request
import json
import urllib.parse

queries = [
    "Worse than Slavery",
    "The First Vote",
    "Freedmen's Bureau",
    "15th Amendment",
    "Ku Klux Klan",
    "Enforcement Act 1870",
    "Ulysses S Grant",
    "Colfax Louisiana",
    "Morrison Waite",
    "Homer Plessy",
    "March on Washington",
    "Thaddeus Stevens",
    "The Union as it was"
]

for q in queries:
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&prop=imageinfo&iiprop=url&gsrlimit=1"
    req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        pages = data.get('query', {}).get('pages', {})
        if pages:
            first_page = list(pages.values())[0]
            image_url = first_page.get('imageinfo', [{}])[0].get('url')
            print(f"{q}|{image_url}")
        else:
            print(f"{q}|NOT FOUND")
    except Exception as e:
        print(f"{q}|ERROR: {e}")
