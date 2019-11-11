module.exports = {
  getAllConversations: (req, res) => {
    const conversations = [
      {
        name: "John",
        message: "hello world"
      },
      {
        name: "Jane",
        message: "hello world"
      },
      {
        name: "Bob",
        message: "hello world"
      }
    ];

    res.status(200).send(conversations);
  }
}