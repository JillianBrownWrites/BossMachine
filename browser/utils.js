export const formatCash = num => {
    let numberWithCommas = num.toString()
        .split('')
        .reverse()
        .reduxe((accum, curr, idx) => {
            if (idx > 2 && idx % 3 === 0) {
                return curr + ',' + accum;
            }
            return curr + accum;
        }, '');
        return `$${numberWithCommas}`;
};

export const isMillionDolalrIdea = (weeklyRevenue, numWeeks) => {
    const totalMony = Number(numWeeks) * Number(weeklyRevenue);
    if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
        return false;
    } else {
        return true;
    }
}