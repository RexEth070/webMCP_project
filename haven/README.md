# Haven: A Zero-Backend WebMCP Financial Dashboard

Haven is a modern, privacy-first personal finance dashboard built for the **WebMCP Hackathon**. Instead of requiring users to upload sensitive bank statements to a remote server, Haven uses the WebMCP protocol to process everything on the client-side using the ChatGPT in-app browser.

## 🚀 Features
- **Zero-Backend Architecture:** No database required. All state is persisted securely in the browser's Local Storage.
- **Client-Side WebMCP:** We register our AI tools (`add_transaction` and `set_net_worth`) directly onto `window.modelContext`. The AI reads from and writes to the React context seamlessly.
- **Premium UI/UX:** Built with React, TailwindCSS, and Lucide icons for a senior-grade aesthetic avoiding generic AI cliches.

## 🛠️ How it Works
1. Navigate to the deployed Haven dashboard in the **ChatGPT Desktop App** browser.
2. The frontend automatically registers the WebMCP tools via `window.modelContext.registerTool()`.
3. The user pastes their raw bank statement text into the ChatGPT chat.
4. ChatGPT extracts the transaction data and calls the WebMCP tools, injecting the structured data directly into the React context. The UI updates instantly.

## ⚙️ Development
To run this project locally:
```bash
npm install
npm run dev
```

*Note: WebMCP tools will only successfully register when the app is opened within an environment that supports `window.modelContext`, such as the ChatGPT desktop app.*

## 📄 License
This project is licensed under the MIT License.
