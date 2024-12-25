let text = document.querySelectorAll('p');
let messages = ["Initializing Hack....", "Hack in Progress....", "Hack Completed....", "Data Extracted....", "Data Decrypted....", "Data Uploaded....", "Data Deleted....", "Hack Completed...."];
let audio = new Audio('audio.mp3'); // Replace with the path to your MP3 file

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const showhack = async (message, index) => {
    await sleep(2000); // Pause for 2 seconds
    console.log(message);
    text[index].innerText = message;
    audio.play(); // Play the MP3 file
}

(async () => {
    for (let i = 0; i < messages.length; i++) {
        await showhack(messages[i], i);
    }
})()