# Notion FAQ Chatbot

A prototype React-based chatbot UI that demonstrates how to create a documentation-powered FAQ assistant using vector embeddings and LLMs.

## How This Chatbot Works

This project demonstrates a chatbot that can answer questions based on Notion documentation:

1. **Vector Embedding Process** (to be implemented in backend):
   - Notion documentation is exported as markdown
   - Text is split into chunks and converted to vector embeddings
   - Vectors are stored in MongoDB along with their source information

2. **Question Answering Flow**:
   - User submits a question via the chatbot UI
   - Question is converted to a vector embedding
   - Vector similarity search finds relevant documentation chunks
   - These chunks are sent to Gemini API as context along with the question
   - Gemini generates a response based on the provided context
   - Response is displayed to the user along with source references

## Project Structure

### Frontend (Current Implementation)
- `src/App.js` - Main application logic and mock backend responses
- `src/components/ChatMessages.jsx` - Displays conversation history
- `src/components/ChatInput.jsx` - Handles user input with loading states
- `src/components/MarkdownRenderer.jsx` - Renders formatted text responses
- `src/components/ChatHeader.jsx` - Simple header component

### Backend (To Be Implemented in PHP)
The backend would need to handle:
- Converting Notion markdown to vector embeddings
- Storing vectors in MongoDB
- Vector similarity search
- Integration with Gemini API
- Returning formatted responses with source citations

## Getting Started

### Prerequisites
- Node.js and npm

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Testing the Prototype
The current implementation includes mock responses for the following types of questions:
- Pricing information: Try asking "What are your pricing options?"
- Features: Try asking "Tell me about your features"
- Getting started: Try asking "How do I get started?"
- Default response: Any other question will show information about how the system works

## Future Development
To make this a fully functional chatbot:
1. Implement the PHP backend for vector processing
2. Set up MongoDB for vector storage
3. Integrate with Gemini API
4. Add authentication if needed
5. Implement conversation history persistence

## License
This project is open source and available under the MIT License.

## Laravel Integration

This React frontend can be integrated with Laravel in several ways:

### Option 1: Laravel as API Backend with Separate React Frontend

This is the simplest approach with minimal changes:

- Keep this React app separate from Laravel
- Implement the backend using Laravel's API resources and controllers
- Set up Laravel Sanctum for API authentication if needed
- Update the API endpoints in the React app to point to Laravel routes
- Configure CORS in Laravel to allow requests from the React app

**Pros:** Clean separation of concerns, independent deployment
**Cons:** Two separate codebases to maintain

### Option 2: Integrate React into Laravel using Laravel Mix

Embed the React app directly within Laravel:

1. Create a new Laravel project
2. Move these React components into `resources/js` directory
3. Configure `webpack.mix.js` to compile the React code:
   ```js
   mix.js('resources/js/app.js', 'public/js')
      .react()
      .sass('resources/sass/app.scss', 'public/css');
   ```
4. Create a Blade view to render the React app:
   ```html
   <div id="root"></div>
   <script src="{{ mix('/js/app.js') }}"></script>
   ```

**Pros:** Single codebase, easier deployment
**Cons:** More setup required, slightly more complex build process

### Option 3: Use Inertia.js to Bridge Laravel and React

Use Inertia.js to create a seamless SPA experience while using Laravel:

1. Set up Inertia.js in a Laravel project
2. Adapt the React components to work with Inertia
3. Use Laravel controllers to load data and pass it to React components

**Pros:** Best of both worlds - Laravel routing with React components
**Cons:** Learning curve for Inertia.js

### Recommended Approach

For a chatbot interface like this, **Option 2** (integrating React into Laravel with Laravel Mix) would likely be the most straightforward approach, especially if the entire application will be served from the same domain.

## Troubleshooting

### Favicon Issues
If you're seeing a favicon from a previous project, try these steps:

1. **Hard Refresh**: Press Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac) to force a cache refresh
2. **Clear Browser Cache**: 
   - Chrome: Settings → Privacy and Security → Clear browsing data → Select "Cached images and files"
   - Firefox: Options → Privacy & Security → Cookies and Site Data → Clear Data
   - Edge: Settings → Privacy, search, and services → Clear browsing data → Select "Cached images and files"
3. **Incognito/Private Window**: Open the app in an incognito or private browsing window
4. **Different Browser**: Try using a different browser altogether

If you're developing locally, the browser may be caching favicons for localhost, which can cause this issue across different projects.
