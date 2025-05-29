//import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorkoutPlanPage from "./pages/WorkoutPlanPage.jsx";

// TODO
// make a forms selection section with defaults
// add page do workout live with videos

// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path="/Shaolin"  element={<MainLayout/>} >
//     <Route index element={<HomePage/>}/>
//     <Route path="/Shaolin/WorkoutPlan" element={<WorkoutPlanPage/>}/>
//   </Route>
// )
// );

// function App() {
//   return <RouterProvider router={router} />
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="WorkoutPlan" element={<WorkoutPlanPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
