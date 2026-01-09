import random, string

size = int(input('podaj długość: '))
key = ''
chars = string.printable.split()
for a in range(size):
    key+=random.choice(chars)

print(key)
