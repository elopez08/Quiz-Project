# Quiz Project — Source Review and Reconstruction Guide

**Repository:** https://github.com/elopez08/Quiz-Project  
**Review date:** October 27, 2026  
**Last inspected commit:** `d5774ef75314b4c8570c7d93dfec17a0164d3d8f` (July 2022)  
**Status:** Static code inspection only. No browser execution or test run has been performed. Original application code remains unchanged.

## 1. Project overview and provenance

This is a JavaScript fundamentals timed quiz built as an educational/bootcamp project, per the README's acceptance criteria. The README documents substantial personal debugging and revisions, especially answer-button handling, capitalization differences, and misplaced question increments. Do not describe the entire assignment as an independently invented concept; the project and its detailed troubleshooting work can be discussed accurately.

The intended behavior: start a quiz, answer five questions before a 60-second timer runs out, lose ten seconds for wrong answers, submit initials and score, view high scores, and optionally restart.

## 2. Source map

| File | Purpose |
|---|---|
| [`index.html`](../index.html) | Quiz title, start button, answer buttons, timer, score modal, initials field, audio element, result feedback |
| [`assets/css/script.js`](../assets/css/script.js) | All quiz questions, answer logic, timer, modal controls, score submission and restart |
| [`assets/css/style.css`](../assets/css/style.css) | Layout, buttons, modal, visual feedback |
| [`README.md`](../README.md) | Original explanation, acceptance criteria, code walkthrough, bug history |

**Important path detail:** The JavaScript is at `assets/css/script.js` (inside the CSS directory), and `index.html` references that exact path. It is not at the repository root or `assets/js/`.

The HTML also includes an audio player for `assets/sound/Swanky's-Swing.mp3`. Before streaming, publishing, or distributing, verify rights to any music asset; a file being in a repository does not establish a license to use it publicly.

## 3. Current code architecture

### State and DOM elements

The script uses `document.getElementById()` to obtain quiz controls and stores state in global variables:

- `timestart = 60`: remaining time
- `questioncycle = 0`: current question index
- `highScore = 0`: most recent score in memory
- `questionsObject.question`: questions indexed 0 through 4, plus index 5 for the completion message
- `answersObject.answers`: four answer strings for each of five questions
- `answer1BtnEl` through `answer4BtnEl`: answer buttons
- `BtnStartEl`, `submitScoreEl`, `textBoxEl`, `modal`: other UI controls

The data structures are objects with numeric-looking property keys, **not arrays**, even though the README sometimes calls them arrays.

### Execution flow

```text
Load index.html → assets/css/script.js
  ↓
Initialize quiz state; hide answer and score controls
  ↓
Click Start Quiz → QuizStart()
  ↓
setInterval(..., 1000) counts down from 60
  ↓
Display questionsObject.question[questioncycle]
  ↓
Fill four buttons from answersObject.answers[questioncycle]
  ↓
Click answer → evaluate hardcoded question/answer text
  ↓
Correct: show feedback / Incorrect: intended 10-second penalty
  ↓
Increment questioncycle
  ↓
After five questions: show initials and submit score
  ↓
Submit: update displayed modal cells, reset timer/question counter
```

## 4. What the original development notes establish

The README describes:
- Building the question and answer objects.
- Matching button text to a particular question using conditionals and `switch`.
- Using `questioncycle++` to advance.
- Deducting ten seconds after incorrect answers.
- Using `Math.sign(timestart)` to distinguish positive, zero, and negative remaining time.
- Diagnosing capitalization differences in variable names.
- Moving misplaced `questioncycle++` operations to avoid question skipping.
- Revisiting the project in July 2022.

These are documented historical development experiences. The latest code still contains issues; do not equate the author's historical screenshots or assertions with current verified runtime behavior.

## 5. Detailed source-level findings

**Critical:**

1. **Repeated event-listener registration:** Inside `QuizStart()`, each `setInterval` tick registers four new `addEventListener("click",...)` handlers. After several seconds, one click may trigger multiple callbacks and unintended question advancement. Register handlers once outside the timer.
2. **Wrong button referenced in answer 4 correct branch:** The fourth button's correct-answer block uses `switch(answer2BtnEl.textContent)` instead of button 4. The cases also include `"Strings"` rather than the expected `"All of the Above"`. Thus the correct-answer feedback branch is inconsistent.
3. **Missing penalties for button 2:** Its incorrect-answer cases show feedback and advance without `timestart -= 10`.
4. **Missing penalty for button 4:** Its incorrect-answer cases likewise omit the ten-second subtraction.
5. **Score not persisted:** Submission declares `quizLocalStorage`, `quizUserInfo`, and `value` but never calls `localStorage.setItem` or reads stored scores. The score popup shows current data and hardcoded example rows, not persistent high scores.
6. **Timing / game-over logic:** The interval checks `questioncycle <= 4` before checking `checkmath`, and success uses `timestart == 0 || questioncycle == 5`. Verify boundary cases; reaching zero and finishing all questions should not be treated identically.
7. **Question transitions depend on text content:** The code matches full question and button strings rather than stable question IDs and correct-answer indices. Small spelling/whitespace edits can silently break scoring.

**Other findings:**

8. `paragraphTextEl` is initially a DOM node, then reassigned to the empty string. Later `paragraphTextEl.textContent = "Submit Score!"` attempts to write to a string rather than the original element. This is a concrete variable misuse.
9. The script uses `submitscore.style.display` even though the declared reference is `submitScoreEl`. Browser ID-to-global behavior can hide the mistake, but it is not reliable.
10. The HTML contains hardcoded score rows (`EL` and a sample score, plus `Dummy` placeholders). These should not be confused with saved scores.
11. Score submission does not validate nonempty initials and does not maintain a sorted high-score list.
12. Restart resets `timestart` and `questioncycle` on submission, but state reset is spread across multiple paths. Test restarting after success, timeout, and negative time.
13. Audio element uses `autoplay`; modern browsers may block autoplay, and licensing should be verified before public distribution.
14. No automated test setup was found in the reviewed source paths; add small tests for question transitions, penalties, and game-over behavior when reviving.

## 6. Suggested repairs (preserve visual design)

1. Preserve the original branch and current commit. Create a separate revival branch.
2. Run `index.html` in a browser, record screenshots and actual console errors.
3. Register one click listener per answer button **outside** the countdown interval.
4. Represent each question as `{prompt, choices, correctIndex}`, with a single answer handler. This removes fragile string comparisons and ensures a uniform wrong-answer penalty.
5. Separate timer updates from question rendering and game-over logic; clamp time at zero.
6. Repair `paragraphTextEl` and `submitScoreEl` variable references.
7. Save score records to `localStorage` and read/sort/display them on opening the score modal.
8. Remove or clearly label example scores.
9. Verify restart paths and keyboard accessibility.
10. Keep the existing CSS and overall design unless changes are approved.

## 7. Manual testing checklist

- [ ] Page loads without JavaScript errors
- [ ] Start button begins exactly one timer
- [ ] Each click advances exactly one question, even after waiting 10+ seconds
- [ ] Every wrong answer subtracts exactly ten seconds
- [ ] Every correct answer leaves time unchanged
- [ ] Timer never becomes negative
- [ ] Time expiration stops quiz and does not permit score submission
- [ ] Finishing question five displays the correct remaining-time score
- [ ] Initials are validated
- [ ] Scores persist after page refresh
- [ ] High-score modal displays genuine stored records
- [ ] Restart works after success and timeout
- [ ] Music behavior and licensing reviewed

## 8. How to run locally

```bash
git clone https://github.com/elopez08/Quiz-Project.git
cd Quiz-Project
git switch -c revival/quiz-project
python -m http.server 8000
```

Open `http://localhost:8000/index.html`. Python is used only to serve static files. Open browser Developer Tools Console and test the behavior above. These commands have not been executed during this review.

## 9. Portfolio framing

**Quiz Project — Timed JavaScript Quiz (2022).** Developed and debugged an educational browser quiz using HTML, CSS, JavaScript DOM manipulation, timers, question/answer objects, and conditional scoring logic. Documented specific problems involving case-sensitive identifiers and question advancement. Persistent high scores were part of the stated requirements but are **not implemented in the inspected current source**.

**Status:** Historical source documented; runtime verification and repairs pending.
