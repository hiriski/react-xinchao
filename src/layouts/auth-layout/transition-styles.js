export const TRANSITION_TIMEOUT = 250;
const TRANSLATE_SIZE = 60;

export const transitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(${TRANSLATE_SIZE}px)`,
  },
  entered: {
    transition: `opacity ${TRANSITION_TIMEOUT}ms ease-in-out, transform ${TRANSITION_TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TRANSITION_TIMEOUT}ms ease-in-out, transform ${TRANSITION_TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(-${TRANSLATE_SIZE}px)`,
  },
};
