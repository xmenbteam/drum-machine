import "../App.css";
import React from "react";
import useSound from "use-sound";
import kick from "../Assets/kick.wav";
import snare from "../Assets/snare.wav";
import snap from "../Assets/snap.wav";
import hiHhatClosed from "../Assets/hi-hat-closed.wav";
import hiHatOpen from "../Assets/hi-hath-open.wav";
import clap from "../Assets/clap.wav";
import crash from "../Assets/crash.wav";
import bonk from "../Assets/bonk.wav";
import ride from "../Assets/ride.wav";

const Machine = () => {
  const [playKick] = useSound(kick);
  const [playSnare] = useSound(snare);
  const [playHiHhatClosed] = useSound(hiHhatClosed);
  const [playHiHatOpen] = useSound(hiHatOpen);
  const [playSnap] = useSound(snap);
  const [playClap] = useSound(clap);
  const [playCrash] = useSound(crash);
  const [playBonk] = useSound(bonk);
  const [playRide] = useSound(ride);

  return (
    <div className="drumBox">
      <button id="crash " className="pad" onClick={playCrash}>
        crash
      </button>
      <button id="ride " className="pad" onClick={playRide}>
        ride
      </button>
      <button id="bonk" className="pad" onClick={playBonk}>
        bonk
      </button>
      <button id="hi-hat-closed " className="pad" onClick={playHiHhatClosed}>
        hi-hat-closed
      </button>
      <button
        id="hi-hat-open"
        className="hi-hat-open pad"
        onClick={playHiHatOpen}
      >
        hi-hat-open
      </button>
      <button id="clap" className="clap pad" onClick={playClap}>
        clap
      </button>
      <button id="kick" className="pad" onClick={playKick}>
        kick
      </button>
      <button id="snare" className="pad" onClick={playSnare}>
        snare
      </button>
      <button id="snap" className="pad" onClick={playSnap}>
        snap
      </button>
    </div>
  );
};

export default Machine;
