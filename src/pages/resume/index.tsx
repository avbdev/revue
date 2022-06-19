import { FC } from "react";
import { Outlet } from "react-router";
import { AddResumeButton } from "../../components/Organisms/Resume/AddResumeButton";

const ResumeHomePage: FC = () => {

    return <>


        <AddResumeButton />

        <Outlet />
    </>
}

export default ResumeHomePage