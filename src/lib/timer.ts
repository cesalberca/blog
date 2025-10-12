export const timer = (callback: () => Promise<void> | void, delayInSeconds: number): void => {
  setTimeout(async () => {
    await callback()
  }, delayInSeconds * 1000)
}
