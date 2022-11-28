function writeRandomQuote() {
	let quotes = [
		"What did you say? Breeding lamp?",
		"It's ok, we're cousins.",
		"You ever notice that girls are cute?",
		"And when I'm done and dead, you better empty the grease trap!"
	]
	let rand = Math.floor(Math.random()*quotes.lenth);
	document.getElementById("quote").innerText = quotes[rand];
}

function copyDate() {
	let footer = document.getElementById("copyright")
	let copyrightText = "copyright chaz micheals " + new Date().getFullYear()
	footer.innerText = copyrightText
}

copyDate();
writeRandomQuote();
