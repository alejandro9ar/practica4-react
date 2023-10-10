import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScene, MemberListScene, MemberDetailScene} from "../scenes";
import { switchRoutes } from "./routes";

export const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<LoginScene />} />
                <Route path={switchRoutes.members} element={<MemberListScene />} />
                <Route path={switchRoutes.memberDetail} element={<MemberDetailScene />} />
            </Routes>
        </Router>
    );
};
