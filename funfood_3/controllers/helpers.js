// I have learned groupBy function from following sources
//https://www.codegrepper.com/code-examples/javascript/node+js+group+by+using+reduce
//https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
//https://codereview.stackexchange.com/questions/66733/groupby-implementation-in-nodejs
//groupBy array to display on pages
exports.groupBy = (item, key) =>
    item.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [...(result[item[key]] || []), item],
        }),
        {}
    );
