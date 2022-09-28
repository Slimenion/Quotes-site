from bs4 import BeautifulSoup
import requests
import codecs

# 3 - 10458

f = codecs.open('BD.txt', 'w', 'utf-8')

quotes = []
authors = []

urlExamle = 'https://vk.com/wall-114875319?offset=2480&own=1&w=wall-114875319_'
headers = {
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"
}

for i in range(3, 10459):
    url = urlExamle + str(i)

    html = requests.get(url).text

    parsed = BeautifulSoup(html, 'html.parser')
    # print(parsed)
    checkEmpty = parsed.find('meta', {'name': 'description'})
    checkEmpty = str(checkEmpty).split('"')[1]
    # print(quote)
    if not checkEmpty == "":
        quoteWithAuthor = parsed.find('div', {'class': 'pi_text zoom_text'})
        if quoteWithAuthor is None:
            quoteWithAuthor = parsed.find('div', {'class': 'pi_text'})
            print(i, str(quoteWithAuthor))
        else:
            print(i, str(quoteWithAuthor))

        f.write(str(quoteWithAuthor) + "\n")
