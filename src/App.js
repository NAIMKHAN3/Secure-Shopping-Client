import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './Pages/Firebase/firebase.config';
import { useDispatch } from 'react-redux'
import { getUserByEmail } from './app/features/auth/authSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUserByEmail(user.email))
      }
    })
  })
  return (
    <div className='bg-neutral-200'>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
