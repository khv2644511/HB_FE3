c=  list(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]))
print(c)

print(c[0])
print(c[1])

o = (10,5)
print(o[1]-o[0])


b= sorted([(1, 3), (3, 4), (4, 8), (8, 13), (13, 17), (17, 20)], key=lambda i:i[1]-i[0])
print(b)

a= sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])[0]

print(a)

# list(zip('hello world', [10, 20, 30, 40, 50]))
  
#   sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])
#   sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])[0]