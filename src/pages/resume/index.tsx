import { FC } from "react";
import { Outlet } from "react-router";
import { ResumeHome } from "../../components/Resume/Home";

const ResumeHomePage: FC = () => {

    return <>


        <ResumeHome />

        <Outlet />
    </>
}

export default ResumeHomePage