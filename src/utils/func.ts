export const hidefindDOMNodeError = (): void => {
  const consoleError = console.error.bind(console);
  console.error = (errObj, ...args) => {
    if (args.includes('findDOMNode')) {
      return;
    }
    consoleError(errObj, ...args);
  };
};
