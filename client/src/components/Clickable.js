import { withSounds } from "arwes";

const Clickable = props => {
  const {
    children,
    sounds,
    onClick,
    ...rest
  } = props;

  const clickWithSound = (e) => {
    sounds.click && sounds.click.play();
    onClick && onClick(e);
  };

  return (
    <span {...rest} onClick={clickWithSound}>
      {children}
    </span>
  );
};

export default withSounds()(Clickable);
