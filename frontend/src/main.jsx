import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'  // <-- Add this import
import { store } from './redux/Store.jsx'  // <-- Ensure the store is correctly imported

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
)

