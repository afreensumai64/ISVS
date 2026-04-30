🚨 Intelligent SOS Validation System (ISVS)

A Prevention-First, Behavior-Aware Emergency Alert System

---

🧠 Overview

The Intelligent SOS Validation System (ISVS) introduces a new layer in emergency systems — Intent Validation.

Unlike traditional SOS apps that immediately send alerts, ISVS evaluates user behavior, context, and voice signals to determine whether an emergency is genuine, accidental, or uncertain — in real time.

«“We don’t just send alerts. We validate them.”»

---

⚡ Problem

- High number of false or accidental SOS alerts
- No verification before escalation
- Emergency services get overloaded
- Genuine cases may be delayed

---

💡 Solution

ISVS adds an intelligent validation layer that:

- Detects intent behind SOS triggers
- Filters fake/accidental alerts
- Prioritizes real emergencies
- Ensures no delay in critical cases

---

🔥 Features

🔹 Source-Level Prevention

- Prompt before sending SOS
- Quick contact options
- Instant override for real emergencies

---

🔹 Behavioral Analysis

- Tap patterns (rapid vs normal)
- Interaction flow (cancel / confirm / retry)
- Generates behavior score

---

🔹 Voice Distress Detection

- Records short audio clip (3–5 sec)
- Uses librosa for:
  - Pitch detection
  - Energy analysis
- Generates distress score

---

🔹 Context Awareness

- Time-of-day anomaly
- Session activity bursts
- Location consistency check

---

🔹 Decision Engine

intent_score = behavior + voice + context

Score| Status| Action
> 0.75| HIGH RISK| Contacts + Helpline
0.4–0.75| UNCERTAIN| Ask confirmation
< 0.4| LOW RISK| Contacts only

---

🔹 SMS Alert System

- Sends alert with:
  - Location link
  - Time
  - Risk level

---

🔹 Silent SOS Mode

- Hidden alert triggering
- No visible UI (for dangerous situations)

---

🔹 Privacy First

- No contact scraping
- No data misuse
- Minimal, user-consented signals only

---

🏗️ Tech Stack

- Frontend: Flutter
- Backend: Flask (Python)
- ML: librosa, scikit-learn
- Database: Firebase / SQLite
- SMS API: Twilio / Fast2SMS

---

🔄 Workflow

1. User presses SOS
2. Prevention layer activates
3. Behavior + voice + context analyzed
4. Intent score generated
5. Smart decision made
6. Alert sent accordingly

---

📂 Project Structure

ISVS/
│── frontend/
│── backend/
│── models/
│── services/
│── database/
│── README.md

---

🚀 Future Enhancements

- Wearable integration (heart rate, motion)
- AI-based speech emotion detection
- Government emergency API integration
- Real-time dashboard for authorities

---

🎯 Innovation

ISVS is not just another SOS system.

It introduces a new concept:
👉 Intent Validation in Emergency Systems

---

👩‍💻 Author

Sumaiya Afreen
Computer Science Engineering Student
AI & Data Science Enthusiast

---

📜 License

This project is for academic and hackathon purposes.
  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
