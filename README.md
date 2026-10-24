🌡️ Temperature Converter

A simple, responsive and beginner-friendly Temperature Converter built using HTML, CSS, and JavaScript.

This project was built as part of my Frontend Development Internship at veda Technology .


✨ Features
- Converts between Celsius (°C), Fahrenheit (°F) and Kelvin (K)
- Real-time conversion on button click
- Clean and responsive UI
- Convert & Reset functionality
- Input validation

 🛠️ Tech Stack
- HTML5
- CSS3 (Flexbox, Shadow, Gradients)
- JavaScript (DOM Manipulation, Switch Case Logic)

 Bug I Fixed & What I Learned
Initially, the Kelvin conversion was not working. The reason was:
1.  `id="Temperature"` vs `getElementById("temperature")` - Case mismatch
2.  `<option value="kalvin">` vs `case "kelvin":` - Spelling mismatch
- Learning: JavaScript is case-sensitive. Small typos can break the entire logic.


  Formula Used
- C to F: (C × 9/5) + 32
- F to C: (F - 32) × 5/9
- C to K: C + 273.15
- K to C: K - 273.15

links : https://anjaligangwar-stack.github.io/project-5/
live link : https://melodic-pixie-ae91f1.netlify.app