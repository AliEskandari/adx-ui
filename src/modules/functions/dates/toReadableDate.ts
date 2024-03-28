export const toReadableDate = (utc: number) => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  return new Date(utc).toLocaleDateString("en-US", options);
};
