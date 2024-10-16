import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "@/env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export const blobToBase64 = (blob: Blob, callback: (base64data: string | null) => void): void => {
  const reader = new FileReader();
  reader.onload = function () {
    const result = reader.result;
    const base64data = typeof result === 'string' ? result.split(",")[1] : null;
    callback(base64data);
  };
  reader.readAsDataURL(blob);
};

const getPeakLevel = (analyzer: AnalyserNode): number => {
  const array = new Uint8Array(analyzer.fftSize);
  analyzer.getByteTimeDomainData(array);
  return (
    array.reduce((max, current) => Math.max(max, Math.abs(current - 127)), 0) /
    128
  );
};

export const createMediaStream = (
  stream: MediaStream,
  isRecording: boolean,
  callback: (peak: number) => void
): void => {
  const context = new AudioContext();
  const source = context.createMediaStreamSource(stream);
  const analyzer = context.createAnalyser();
  source.connect(analyzer);
  const tick = () => {
    const peak = getPeakLevel(analyzer);
    if (isRecording) {
      callback(peak);
      requestAnimationFrame(tick);
    }
  };
  tick();
};
