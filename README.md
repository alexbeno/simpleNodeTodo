# Node js template

## Install package
```
yarn install
```

## Start the serveur
Pour lancer le serveur, il y 3 méthodes possibles :
```
yarn run start
```
<br>

### Create the database
```
sudo mongod --dbpath data
```

open a new terminal window and launch
```
mongo
```

you can swift between Database with the following commande
```
use task
```

add some entries with this line
```
db.taskList.insert({"Name" : "task2", "content" : "Lorem ipsum dolor amet vice biodiesel messenger bag, vinyl man braid +1 put a bird on it brunch hashtag austin kogi adaptogen pinterest waistcoat tumeric. Brooklyn tumeric wolf flannel whatever. Actually paleo hammock", "tags" : [ "design", "back" ], "user" : [ "Alexis", "Mustafa" ], "data": { "author": "Alexis", "state": "done"}})
```
<br>