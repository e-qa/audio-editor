export function createAudioElement(src) {
  const audioSrc = new Audio();
  audioSrc.src = src;
  audioSrc.controls = true;

  return audioSrc;
}
