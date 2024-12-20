const prompts = [
    "Wat is de belangrijkste taak die je vandaag kunt voltooien?",
    "Waar ben je vandaag dankbaar voor?",
    "Wat zou je doen als je niet kon falen?",
    "Welke kleine stap kun je vandaag nemen om je doelen te bereiken?",
    "Wat heb je gisteren geleerd dat je vandaag kunt toepassen?"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    const dailyPromptIndex = date.getDate() % prompts.length;
    document.getElementById("prompt").innerText = prompts[dailyPromptIndex];
    displayNotes();
  });

  function saveNote() {
    const noteInput = document.getElementById("noteInput");
    const note = noteInput.value.trim();
  
    if (note) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const timestamp = new Date().toLocaleString(); // Datum en tijd toevoegen
      notes.push({ text: note, timestamp });
      localStorage.setItem("notes", JSON.stringify(notes));
      noteInput.value = "";
      displayNotes();
    } else {
      alert("Je moet een notitie invoeren!");
    }
  }
  
  function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesContainer = document.getElementById("notes");
  
    notesContainer.innerHTML = notes
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .map(note => `<p><strong>${note.timestamp}</strong>: ${note.text}</p>`)
      .join("");
  }
  