const getLogContents = (label: string, args: any[]) => {
  return [`[@jinpill/react-libs] ${label}:`, ...args];
};

const log = (label: string, ...args: any[]) => {
  // eslint-disable-next-line no-console
  console.log(...getLogContents(label, args));
};

const warn = (label: string, ...args: any[]) => {
  // eslint-disable-next-line no-console
  console.warn(...getLogContents(label, args));
};

const error = (label: string, ...args: any[]) => {
  // eslint-disable-next-line no-console
  console.error(...getLogContents(label, args));
};

export default {
  log,
  warn,
  error,
};
