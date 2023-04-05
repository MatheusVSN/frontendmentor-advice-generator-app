import DiceIcon from "../images/icon-dice.svg";
import DesktopPatternDivider from "../images/pattern-divider-desktop.svg";

import Image from "next/image";

export default function card({ id, advice, onClick }) {
    function mouseButton1Click() {
        onClick()
    }

    return (
        <div className="bg-dark-grayish-blue grid place-content-center p-7 pb-0 rounded-lg">
            <h2 className="text-neon-green text-center font-bold tracking-widest text-xs mb-8">
                {`Advice #${id}`}
            </h2>
            <h1 className="text-light-cyan text-center font-semibold text-2xl max-w-md place-self-center mb-8">
                {advice}
            </h1>

            <Image src={DesktopPatternDivider} />

            <button className="bg-neon-green p-4 inline-flex w-14 place-self-center rounded-full relative top-7 transition hover:shadow-custom" onClick={mouseButton1Click}>
                <Image className="object-contain" src={DiceIcon} />
            </button>
        </div>
    )
}