# Project-2 
## Manzo 
# AI-Powered Universal API Explorer 

## Introduction

**Universal API Explorer** is an intelligent tool designed to simplify API interaction for **developers**, **learners**, and **non-technical users**. Whether you're testing endpoints, deciphering complex JSON responses, or learning API fundamentals, this tool bridges the gap between raw data and human understanding using AI.

### The Problem
- **Developers** waste time parsing sprawling API docs and debugging nested JSON structures.
- **Newcomers** struggle with jargon like "query params," "headers," and "authentication."
- **Everyone** faces repetitive tasks: manually crafting requests, guessing parameters, or pasting JSON into ChatGPT.

### The Solution
This app acts as your **AI-powered API assistant**:
1. **Automated Documentation Analysis**   
   - Paste an API documentation URL and a prompt for what you would like to do, and let AI extract relavant **endpoints**, **parameters**, **authentication methods**, and usage examples.
2. **Smart Parameter Guidance** 
   - Get AI-recommended parameters, headers, and keys based on the API's context (e.g., `?page=2` for pagination, `Authorization: Bearer` for tokens).
3. **Human-Readable Data + Raw Code** 
   - Receive API responses in **clean, formatted views** alongside **AI insights** (e.g., "This array contains 23 user objects with `id`, `email`, and `roles`").
   - Not only that, you still recieve the raw data that is retrived as welL!
4. **One-Click Exploration** 
   - Modify data safely: test `GET`/`POST`/`PUT`/`DELETE` without writing code or worrying about syntax errors and even view your API search history for reference!

### Why Use This Tool?
- **Developers**: Rapidly prototype, debug, or reverse-engineer APIs.  
- **Learners**: Understand APIs through AI explanations and real-time examples.  
- **Non-Technical Users**: Interact with APIs without coding—perfect for product managers or data analysts.  

No more switching between Postman, docs, and ChatGPT. **Universal API Explorer** empowers you to work *smarter*, not harder.  

# AI-Powered API Explorer: Workflow Design

## Proposed Workflow

### **Frontend User Journey**
1. **Input Phase**  
   - **Option 1**: Enter API documentation URL + user prompt (e.g., CryptoAPI documentation URL, "I want to find the current data of bitcoin").  
   - **Option 2**: Directly input API endpoint, tokens, and parameters (for users who already know the API structure).  

2. **AI Analysis Phase**  
   - **AI-Powered Documentation Parsing** (if URL provided):  
     - Extracts endpoints, methods, parameters, authentication requirements.  
     - Generates usage examples (e.g., "Use `?limit=10` for 10 results per page").  
   - **Query Interpretation**: Translates user prompts into actionable API requests (e.g., "Show me recent orders" → `GET /orders?sort=desc&limit=5`).  

3. **Parameter Guidance & Execution**  
   - **Smart Suggestions**: AI recommends required/optional parameters (e.g., `Authorization: Bearer <token>`).  
   - **User Input**: Input parameters, headers, or body content.  
   - **Execute Request**: One-click to send `GET`/`POST`/`PUT`/`DELETE` requests.  

4. **Data Interaction Phase**  
   - **Raw Response**: View unprocessed JSON data.  
     ```json
     {
       "users": [
         { "id": 1, "name": "Alice", "role": "admin" }
       ]
     }
     ```
   - **AI Mode**:  
     - **Summarization**: "This response contains 5 user objects, including 2 admins."  
     - **Data Visualization**: Auto-generate charts/tables for arrays (e.g., user roles distribution).
     - **AI Insights**:Analyzes the info and searches for any relavant general info that it has.

5. **History & Iteration**  
   - **Query History**: Save requests/responses to a history page.  
   - **Replay/Modify**: Re-run past queries or tweak parameters for new tests.  

---

### **Backend Workflow**
1. **Documentation Parsing**  
   - **Step 1**: Fetch and parse API docs 
   - **Step 2**: Extract endpoints, parameters, auth methods (e.g., "Bearer token in `Authorization` header").  

2. **AI Analysis & Query Mapping**   
     - Map natural language prompts to API calls (e.g., "Find users from London" → `GET /users?city=London`).  
     - Infer parameter defaults (e.g., `page=1` if pagination is required).  

3. **Request Handling**  
   - **Validation**: Ensure required parameters/headers are provided.  
   - **Proxy Requests**: Forward validated requests to the target API  
   - **Error Handling**: Catch `4xx/5xx` errors and explain them in plain language. 

4. **Data Processing**  
   - **Raw Data**: Return untouched API response.  
   - **AI Insights Pipeline**:  
     - Summarize large datasets (e.g., "1,000 records: 70% active, 30% inactive").  
     - Highlight key fields (e.g., "`total_sales` increased by 15% this month").  

5. **History Logging**  
   - Store requests, responses, and AI insights in a database for replayability.  

---
