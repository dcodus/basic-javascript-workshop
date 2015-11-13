var randomQuotes = ["Seek simplicity, and distrust it.", "Nothing, of course, begins at the time you think it did.", "The truth is rarely pure and never simple.", "Never forget what a man says to you when he is angry.", "It is hard enough to remember my opinions, without also remembering my reasons for them!", "Silence is more musical than any song.", "Imagination is more important than knowledge...", "Silence is more musical than any song.", "Our obligations to our country never cease but with our lives.", "You learn a lot about people when you play games with them.", "Life is consciousness."];

function newQuote(){
    return randomQuotes[Math.floor(Math.random() * 1 + 1)]
}

newQuote();