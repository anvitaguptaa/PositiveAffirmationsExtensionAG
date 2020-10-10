chrome.browserAction.onClicked.addListener(function(tab) {


    const messages = ["I trust in the person I am.", 
		  "I am enough. Always.", 
                  "I am strong and capable.", 
                  "I have a lot to offer the world.", 
                  "My heart is full of love for who I am.", 
                  "I bring joy to the world.", 
                  "I am proud of the person I am today, and the person I will be tomorrow.", 
                  "I work hard and know my worth.", 
                  "I place value on the experience I have, and my ability to learn and grow more.", 
                  "I take pride in the work I do.", 
                  "When I work, I apply myself with focus and positivity.", 
                  "The world wants more of what I have to offer.", 
                  "I am worthy of love and trust in my relationships and friendships.", 
                  "My friendships are important to me.", 
                  "I surround myself with people I love and care about, but also take time to nurture my relationship with myself.", 
                  "My inner strength knows no bounds.",
                  "I breathe in energy and love, I exhale negativity and doubt.",
                  "I take time to know my needs, limits and boundaries better.",
	          "My mental health is just as important as my physical health.",
		  "I look after my mental health because it deserves my love.",
		  "I walk tall and am proud of who I am.",
		  "When I eat well, exercise and get enough sleep, I am investing in myself.",
		  "I am allowed to have bad days.",
		  "I am patient with and kind to myself.",
		  "My bad days and unhappy moments will always pass.",
		  "I smile with confidence in myself and in the future.",
		  "Sometimes I don't know where I'm going, but I will find my way. And it will be fabulous."];

	const randomIndex = Math.round(Math.random()*messages.length);

	alert(messages[randomIndex]);
});