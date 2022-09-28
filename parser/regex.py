import re
import codecs

f = 'BD.txt'

# uniqines = set(codecs.open('BD.txt', 'r', 'utf-8').readlines())
# codecs.open('BD.txt', 'w', 'utf-8').writelines(set(uniqines))

BDAll = ""

for line in codecs.open('BD.txt', 'r', 'utf-8'):
    line = line[:-1]
    match = re.search(r'#?[А-ЯЁ]{1}[а-яё]+\.?(?:<.*?>)?\s[А-ЯЁ]\.?\s?[А-ЯЁ]\.?', line)
    if match is None:
        print(line)
    if match is None:
        line += "\tNULL\n"
    else:
        if match[0][0] == '#':
            ans = str(match[0])[1:]
            ans = ans.replace('</a>', '')
            line += "\t" + ans + "\n"
        else:
            line += "\t" + match[0] + "\n"
    line = line.replace('href="','data-link="')
    BDAll += line

f = codecs.open('BDDontRepet.txt','w','utf-8')
f.write(BDAll)
#
# match = re.search(r'#?[А-ЯЁ]{1}[а-яё]+\s[А-ЯЁ]\.\s?[А-ЯЁ]\.', '')
# print(match)
# print(len(match))