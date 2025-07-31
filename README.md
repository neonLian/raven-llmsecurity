# RAVEN
*Red-teaming AI Validation & Exploitation Network*

RAVEN is an automated AI red teamer that tests attacks for LLM prompt injection, information leakage, and content policy bypassing.

## Setup

You will need to run both the backend Python FastAPI server and the Vite front-end.

**API Key**

RAVEN uses an LLM to generate adversarial prompts. To set up this LLM, get an OpenAI API key and create a .env file in the backend directory with the following format:

```env
# backend/.env
OPENAI_CHAT_ENDPOINT=https://your.openai.chat.endpoint
OPENAI_CHAT_MODEL=gpt-4o
OPENAI_CHAT_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Backend**

```
cd backend
pip install -r requirements.txt
```

**Frontend**

```
cd frontend
npm install --force
```

## Usage

The backend and frontend each need to be running in their own terminal, at the same time.

**Backend**

```
cd backend
fastapi dev main.py
```

**Frontend**

```
cd frontend
npm run dev
```

After starting the servers, open the browser to the localhost address indicated by the frontend Vite terminal. You may need to wait a moment for the backend to finish importing PyRIT.
