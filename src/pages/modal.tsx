import { useState } from "react";
import { PlusChallenges } from "../components/PlusChallenges/PlusChallenges";

export default function Modal() {

    const [show, setShow ]= useState(false)

    return (
        <div>
            <button>show modal</button>
            <PlusChallenges show={false} />
        </div>
    )
}