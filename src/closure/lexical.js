const buildcount = (i) =>{
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount =buildcount(1)
myCount();
myCount();
myCount();

const myOtherCount = buildcount(10);
myOtherCount();
myOtherCount();
myOtherCount();