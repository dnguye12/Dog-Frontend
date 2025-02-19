/* eslint-disable react/prop-types */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { useUser } from "@clerk/clerk-react";

import RecommendBreedPage from "./routes/recommend-breed/RecommendBreedPage"
import HomePage from "./routes/home/HomePage"
import SignInPage from "./routes/sign-in/SignInPage";
import SignUpPage from "./routes/sign-up/SignUpPage";
import { getUser, postUser } from "../services/user";
import AddBreedPage from "./routes/add-breed/AddBreedPage";

const RequireAuth = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/sign-in");
    }
  }, [isLoaded, isSignedIn, navigate])

  useEffect(() => {
    if (user) {
      const checkProfile = async () => {
        try {
          // Checks if the user profile exists and creates one if not.
          const request = await getUser(user.id)
          if (request?.status === 204) {
            const helperImage = user.hasImage ? user.imageUrl : ""
            await postUser(user.id, user.fullName, helperImage)
          }
        } catch (error) {
          console.log(error)
        }
      }
      checkProfile()
    }
  }, [user])

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      <Route path="/recommend-breed/*" element={<RecommendBreedPage />} />

      <Route path="/add-breed/*" element={
        <RequireAuth>
          <AddBreedPage />
        </RequireAuth>
      } />
    </Routes>
  )
}

export default App
