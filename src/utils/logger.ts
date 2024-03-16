const getLogContents = (label: string, args: any[]) => {
  return [`[@jinpill/react-libs] ${label}:`, ...args];
};

export const log = (label: string, ...args: any[]) => {
  console.log(...getLogContents(label, args));
};

export const warn = (label: string, ...args: any[]) => {
  console.warn(...getLogContents(label, args));
};

export const error = (label: string, ...args: any[]) => {
  console.error(...getLogContents(label, args));
};
