const add = (a, b) => {
	return a + b;
};

const sub = (a, b) => {
	return a - b;
};

const name = "Towhid";

// ✅ Exporting a single property
// module.exports = add;    // exporting a function
// module.exports = name;   // exporting a const

// ✅ Exporting multiple property
// module.exports.addition = add;
// module.exports.subtraction = sub;
// module.exports.myName = name;

// ✅ Exporting multiple property together
// module.exports = { add, sub, name };
