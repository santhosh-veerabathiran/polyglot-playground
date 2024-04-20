# 1. clear()

dict1 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict1)
dict1.clear()
print("Clear:", dict1)
print()

# 2. copy()

dict2 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict2)
print("Copy:", dict2.copy())
print()

# 3. fromkeys(iterable[,value])

keys = ("k1","k2","k3")
value = 25
print("Keys:", keys)
print("Values", value)
dict3 = dict.fromkeys(keys,value)
print("From Keys:", dict3)
print()

# 4. get(key)

dict4 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict4)
print("Get (model):", dict4.get("model"))
print()

# 5. items()

dict5 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict5)
print("Items:", dict5.items())
print()

# 6. keys()

dict6 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict6)
print("Keys:", dict6.keys())
print()

# 7. pop(keyname[,defaultvalue])

dict7 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict7)
print("Pop:", dict7.pop("model"))
print("Dictionary:", dict7)
print()

# 8. popitem()

dict8 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict8)
print("Pop Item:", dict8.popitem())
print("Dictionary:", dict8)
print()

# 9. setdefault(keyname[,value])

dict9 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict9)
print("Set Default (k1):", dict9.setdefault("k1"))
print("Set Default (k2):", dict9.setdefault("k2",10))
print("Dictionary:", dict9)
print()

# 10. update(iterable)

dict10 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict10)
num = [('n1',5),('n2',10)]
print("List:",num)
dict10.update(num)
print("Update:",dict10)
print()

# 11. values()

dict11 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict11)
print("Values:", dict11.values())
print()

# 12. len(iterable)

dict12 = {"brand":"Ford","model":"Mustang","year":1964}
print("Dictionary:", dict12)
print("Length:", len(dict12))
print()