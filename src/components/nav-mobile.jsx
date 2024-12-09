import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="px-1 bg-white lg:hidden">
            Hello
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>
    );
};