# Short.js / Create shorter, more readable code
### Without short.js
```js
let parent = document.getElementsByClassName("parent-el")[0];
let child = document.createElement("p");
child.innerText = "Hello!";
child.classList.add("child-el");
parent.appendChild(child);
```

### With short.js
```js
getFirst("parent-el").add(
	create("p", {class: "child-el"}, "Hello")
)
```

### Every function
Every function that you can use. Keep in mind, that you can only use those functions, if you used getFirst("..."), getAll("..."), etc. or modified an existing element with _addFunctionsToElement(el).

```
getFirst("#el").add(el);
getFirst("#el").add(el1, el2, ...);
getFirst("#el").empty();
getAll(".el");
create("TagName", {attribute: value}, "innerHTML");
```


# Why not use jQuery?
1. Why should you?
2. jQuery has its own objects, while short.js returns a basic (but modified) HTMLElement
3. It's more natural than using $.

# Future
- Work on a way to do `getAll("p").empty()` (Maybe add an own list-type-class-thing)
- Add getFirst() to returned elements so you can do `getFirst("#div-1").getFirst("#child-1")`
