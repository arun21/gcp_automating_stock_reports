

exports.handler = (req, res) => {
    const message = "Hello Node!";
    res.status(200).send(message);
}