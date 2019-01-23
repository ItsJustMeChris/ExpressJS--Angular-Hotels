const properties = [{ name: 'Boston Beach House' }, { name: 'Nevada Desert Resort' }];

module.exports = function (router) {
    router.get('/api/v1/properties', (req, res) => {
        console.log("REQUESTED");
        res.send(properties);
    });

    router.get('/api/v1/properties/:name', (req, res) => {
        for (let i = 0; i < properties.length; i += 1) {
            if (properties[i].name == req.params.name) {
                return res.send(properties[i]);
            }
        }
        return res.send({ properties: {} });
    });
}
