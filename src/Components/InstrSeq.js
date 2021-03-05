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

const InstrSeq = (
  kickActive,
  snareActive,
  hhcActive,
  hhoActive,
  snapActive,
  clapActive,
  crashActice,
  bonkActive,
  rideActive,
  setKickActive,
  setSnareActive,
  sethhcActive,
  sethhoActive,
  setSnapActive,
  setClapActive,
  setCrashActive,
  setBonkActive,
  setRideActive
) => {
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
    <div id="sequencer">
      <div className="seqInst">
        <button id="bonk" className="instPad" onClick={playBonk}>
          bonk
        </button>
        <button id="clap" className="clap instPad" onClick={playClap}>
          clap
        </button>
        <button id="snap" className="instPad" onClick={playSnap}>
          snap
        </button>
        <button id="ride " className="instPad" onClick={playRide}>
          ride
        </button>
        <button id="crash " className="instPad" onClick={playCrash}>
          crash
        </button>
        <button
          id="hi-hat-open"
          className="hi-hat-open instPad"
          onClick={playHiHatOpen}
        >
          hi-hat-open
        </button>
        <button
          id="hi-hat-closed "
          className="instPad"
          onClick={playHiHhatClosed}
        >
          hi-hat-closed
        </button>
        <button id="snare" className="instPad" onClick={playSnare}>
          snare
        </button>
        <button id="kick" className="instPad" onClick={playKick}>
          kick
        </button>
      </div>
    </div>
  );
};

export default InstrSeq;
