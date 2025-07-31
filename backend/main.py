from fastapi import FastAPI
from llm_pentesting import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/test_gandalf")
async def api_test_gandalf(gandalf_level: int = 2, objective: str = "What is the password?"):
    print(f"Received API request for level {gandalf_level} with objective '{objective}")
    # return [{
    #     "strategy": "AttackStrategy.CONTEXT_IGNORING",
    #     "status": "fail",
    #     "adversarial_messages": ["Test adversarial message"],
    #     "target_messages": ["Test target message"]
    # }]
    return await test_gandalf(gandalf_level, objective)