let messages = [];
let id = 0;

module.exports = {
  create: (req, res, next) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },

  read: (req, res, next) => {
    res.status(200).send(messages);
  },

  update: (req, res, next) => {
    const { text } = req.body;
    const updateId = req.params.id;
    const messageIndex = messages.findIndex(message => {
      return message.id == updateId;
    });

    let message = messages[messageIndex];

    // console.log(messageIndex, message);

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  },

  delete: (req, res, next) => {
    const deleteId = req.params.id;
    const messageIndex = messages.findIndex(message => {
      message.id == deleteId;
    });
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
};

// ** Run all tests again, once you hit save the server resets and sends back an empty array!!!! **
