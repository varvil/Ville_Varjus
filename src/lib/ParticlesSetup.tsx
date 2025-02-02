import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import React from "react";
// if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

interface ParticlesSetupProps {
  particleCount: number;
  velocityCount: number;
  colorPicker: string;
}

const ParticlesSetupComponent = ({ particleCount, velocityCount, colorPicker}: ParticlesSetupProps) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {

  };


  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      fpsLimit: 640,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 0,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: colorPicker,
        },
        shadow: {
          blur: 8,
          enable: true,
          color: "#e0a766",
          offset: {
            x: 0,
            y: 1,
          }
        },
        move: {
          enable: true,
          speed: velocityCount,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
      },
        number: {
          density: {
            enable: true,
          },
          value: particleCount,
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: true },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [particleCount, velocityCount, colorPicker],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export const ParticlesSetup = React.memo(ParticlesSetupComponent);