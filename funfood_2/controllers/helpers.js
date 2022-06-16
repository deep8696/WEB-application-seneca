
//groupBy array to display on pages
exports.groupBy = (item, key) =>
    item.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [...(result[item[key]] || []), item],
        }),
        {}
    );
