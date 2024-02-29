# Node.js Headlines Project for NBNW

This is a Node.js project that fetches and displays the latest headlines using the News API. It also includes caching to reduce the number of API calls.

## Setup Instructions

Follow these steps to set up and run the project:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/headlines-project.git
   cd headlines-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install TypeScript globally (if not installed):
   ```bash
   npm install -g typescript
   ```

### Configuration

1. Obtain an API key from [News API](newsapi.org)
2. Create a .env file in project root and add entry:
   ```
   NEWS_API_KEY=your_api_key
   ```

### Running the Project

After Installing all the dependencies, run:

```
npm run server
```

The server will start at [http://localhost:3000](The server will start at http://localhost:3000.)

### Technologies Used

- [Node.js](www.nodejs.org)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- Memory Cache
