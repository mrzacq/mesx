export const formatWaktu = (totalDuration) => {
  if (totalDuration > 60) {
    return `${Math.floor(totalDuration / 60)} jam ${totalDuration % 60} min`;
  } else {
    return `${totalDuration} min`;
  }
};

export const formatMenit = (totalMenit) => {
  return `0${Math.floor(totalMenit / 60)}.${
    totalMenit % 60 !== 0 ? totalMenit % 60 : `0${totalMenit % 60}`
  }`;
};
