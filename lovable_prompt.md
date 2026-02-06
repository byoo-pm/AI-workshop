# Lovable.dev Deployment Prompt

**Instructions:**
Copy and paste the following prompt into Lovable's chat interface to generate the Jarvis Voice Agent application.

---

## **Prompt for Lovable:**

I want to build a **Futuristic Voice Agent Interface** called "JARVIS".

**1. Design & Aesthetics:**
*   **Theme:** Deep Midnight Blue & Electric Blue gradient background (`#002552` to `#0050A0`).
*   **Style:** Sleek, Glassmorphism, Rounded corners (24px).
*   **Layout:** 
    *   Central floating "Chat Card" (iPhone style but wider).
    *   Header: "JARVIS | Voice Interface" with a pulsing green status dot.
    *   Main Content: Scrollable Chat History.
    *   Footer: Input area with a large, pulsing **Microphone Button** and a Text Input field.
*   **Animations:** 
    *   The Microphone button should "pulse" (glow red) when listening.
    *   Messages should fade in smoothly.
*   **Typography:** Use 'Inter' font. Clean and minimal.

**2. Functionality (The Logic):**
*   **Voice Input:** Use the browser's native `webkitSpeechRecognition` API.
    *   When I click the Mic, start listening.
    *   When I stop speaking, automatically send the text.
*   **Voice Output:** Use `window.speechSynthesis` to speak the Agent's response.
*   **State Management:** Keep track of the conversation history.
*   **API Connection:**
    *   Create a placeholder API service/function that simulates the Agent Logic.
    *   (Later I will connect this to my Python/Supabase backend).
    *   For now, just mock the response: "I am Jarvis. System Online."

**3. Specific Behavior:**
*   If the user says "Email Nate", show a "Thinking..." bubble, then respond with: "Email sent to Nate." (Mock action).
*   The Agent messages should be white bubbles on the left.
*   The User messages should be blue bubbles on the right.

**4. Tech Stack:**
*   React + Vite.
*   Tailwind CSS for styling.
*   Lucide React for icons (Mic, Send).

---

**Next Steps (After Lovable Builds the UI):**
1.  Lovable will generate the React code.
2.  To make it "Real", we need to connect it to a Backend.
3.  Since you don't want to use n8n, we can deploy the `server_agent.py` logic to **Supabase Edge Functions** (which Lovable supports).
