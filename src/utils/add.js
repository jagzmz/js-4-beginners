module.exports = (...args) =>{
    const values = args.filter( i => !Number.isNaN(Number(i)) ).map( i => Number(i) );
    return values.reduceRight((previous, current)=>{
        return previous + current;
    });
}