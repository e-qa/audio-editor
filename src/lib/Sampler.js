import { Sampler } from "tone";

export function setSampler(url) {
  let sampler = new Sampler({
    urls: {
      C4: url,
    },
    volume: -16,
  });
  sampler.toDestination();
  return sampler;
}
