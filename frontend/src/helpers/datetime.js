export const secondsToReadbleTime = (seconds) => {
    
    const h = Math.floor(seconds / 60 / 60);
    const m = Math.floor(seconds / 60) - h * 60;
    const s = seconds % 60;
    // Coloca um zero na frente se o número for menos que 10:
    const formatNumber = (v) => `0${Number.parseInt(v, 10)}`.slice(-2);
    const readableTime = [h,m,s].map(formatNumber).join(':');

    return readableTime;
};