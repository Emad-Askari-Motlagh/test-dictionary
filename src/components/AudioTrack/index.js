import "./AudioTrack.styles.scss";
const AudioTrack = ({ track, testId }) => {
  return (
    <div className="audio-wrapper">
      <span>
        {track && <audio data-testid={testId} src={track} controls />}
      </span>
    </div>
  );
};
export default AudioTrack;
