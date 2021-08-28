export default function Home() {
  return (
    <div className="wrapper">
      <audio
        href="audio_tag"
        loop
        src="/kerwemarsch.mp3"
        type="audio/mpeg"
        controls
      ></audio>
      <style jsx>{`
        .wrapper {
          height: 100vh;
          display: flex;
          align-items: center;
        }
        audio {
          margin: 0 auto;
          display: block;
        }
      `}</style>
    </div>
  );
}
