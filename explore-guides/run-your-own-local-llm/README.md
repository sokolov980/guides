# Run Your Own Local LLM

If you use ChatGPT or any other AI regularly, try asking it for a detailed summary of what it knows about you — or even ask it to tell you something you don’t know about yourself. For me, it shared my average message length in characters. This led me to explore whether it was possible to run a local LLM on my MacBook.

There are several open-source models you can run entirely offline. They're limited only by your machine’s processing power. I downloaded one called LLaMA with 8 billion parameters and set up a local interface that runs in the browser. It works offline and does not send data to any external server.

---

## Setup: Open WebUI + Ollama

Open WebUI is a browser-based interface for local models. It connects to Ollama, which runs the model backend.

### 1. Install Ollama

1. Go to the official Ollama website: [https://ollama.com/download/](https://ollama.com/download/)
2. Download and install the version for macOS.
3. After installation, Ollama should run in the background. You can verify it by opening your terminal and running:

```bash
ollama run llama3
```

---

### 2. Set Up Open WebUI

```bash
# Clone the Open WebUI repository
git clone https://github.com/open-webui/open-webui.git

# Change directory to the backend folder
cd open-webui/backend

# Install dependencies using uv
uv pip install -r requirements.txt

# Start the web server
DATA_DIR=~/.open-webui uvx --python 3.11 open-webui@latest serve
```

After running the final command, Open WebUI will be available at:  
http://localhost:8080

---

## Running the LLaMA 3 70B Model with MLX-LM

The 8B model runs smoothly but may hallucinate in longer sessions. ChatGPT-4o is estimated to use 1.8 billion parameters. For improved accuracy, you can run the LLaMA 3 model with 70 billion parameters from the terminal. This works efficiently on Apple Silicon machines.

### 1. Install MLX-LM

```bash
pip3 install mlx-lm
```

### 2. Log In to Hugging Face

LLaMA 3 is a gated model, so you must log in to Hugging Face to access it:

```bash
huggingface-cli login
```

You will be prompted for your access token. You can generate one in your Hugging Face account settings.

---

### 3. Run the Model

```bash
mlx_lm chat --model mlx-community/Llama-3.3-70B-Instruct-8bit
```

An alias can simplify this. For example:

```bash
username@hostname ~ % llm
Calling `python -m mlx_lm.chat…` directly is deprecated. Use the `mlx_lm.chat…` or `python -m mlx_lm chat…` instead.
[INFO] Starting chat session with mlx-community/Llama-3.3-70B-Instruct-8bit.
```

The command list:
- `q` to exit
- `r` to reset the chat
- `h` to display the commands

---

## Example Prompts

```
>> what unique travel destinations would work well for a weekend getaway?

Consider Asheville, Charleston, or Sedona for unique weekend getaways with charm.

>> can you recommend some impactful books on personal development?

"Atomic Habits" by James Clear  
"The 7 Habits of Highly Effective People" by Stephen R. Covey  
"Mindset" by Carol S. Dweck  
"Daring Greatly" by Brené Brown  
"The Power of Now" by Eckhart Tolle

>> what are some effective methods for learning a new language?

Immerse, practice speaking, use apps, read, write daily, set goals, and be consistent.
```
