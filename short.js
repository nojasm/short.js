function create(query, args, innerHTML) {
	var el;
	if (query.includes("#")) {
		el = document.createElement(query.split("#")[0]);
		el.id = query.split("#")[1];

	} else if (query.includes(".")) {
		el = document.createElement(query.split(".")[0]);
		for (var className of query.split(".").slice(1)) {
			el.classList.add(className);
		}
	}

	if (args instanceof Object) {
		Object.keys(args).forEach((key) => {
			el.setAttribute(key, args[key]);
		});
	}

	if (typeof(innerHTML) === "string")
		el.innerHTML = innerHTML;

	_addFunctionsToElement(el);

	return el;
}

function _addFunctionsToElement(el) {
	if (el.add === undefined) {
		el.add = function() {
			for (var argEl of arguments) {
				el.appendChild(argEl);
			}

			return el;
		};
	}

	if (el.empty === undefined) {
		el.empty = function() {
			el.innerHTML = "";
			return el;
		};
	}

	return el;
}

function getAll(query) {
	let arr = document.querySelectorAll(query);

	arr.forEach((el) => {_addFunctionsToElement(el)});

	return arr;
}

function getFirst(query) {
	let el = getAll(query)[0];

	// TODO: Also match tagnames

	if (el == undefined)
		throw new Error("Element '" + query + "' not found");

	_addFunctionsToElement(el);
	return el;
}

// TODO: Add function for getting elements based on one of their attributes
// TODO: Add function for filtering elements based on their attributes (+ filter-like callback functions for more advanced filters)
