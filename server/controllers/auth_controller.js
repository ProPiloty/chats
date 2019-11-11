// Packages
const bcrypt = require('bcryptjs');

// Auth Controller
module.exports = {
  register: async (req, res) => {
    // Destructuring req.body
    const {
      username,
      email,
      password,
      phone
    } = req.body

    // Destructuring session off req
    const {
      session
    } = req;

    // Database integration
    const db = req.app.get('db');

    // Checks if user already exists in database by email
    const userFound = await db.auth.check_user_email({email});

    // If user already exists, returns and sends error
    if (userFound[0]) return res.status(409).send('User already exists');

    // Generates salt and hashes password using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Stores user data in database
    const user = await db.auth.register_user({
      username,
      email,
      password: hash,
      phone
    });

    // Stores returned user data on session
    session.user = user;

    // Responds to client with ok status and user data on session
    return res.status(200).send(session.user);
  },
  login: async (req, res) => {
    // Destructuring req.body
    const {
      email,
      password
    } = req.body;

    // Destructuring session off req
    const {
      session
    } = req;

    // Database integration
    const db = req.app.get('db');

    // Checks if user already exists in database by email
    const userFound = await db.auth.check_user_email({email});

    // If user already exists, returns and sends error
    if (!userFound[0]) return res.status(401).send('User not found');

    // Checks user input password to hash stored in database
    const authenticated = bcrypt.compareSync(password, userFound[0].password);

    if (authenticated) {
      // Destructures userFound[0]
      const {
        id,
        username,
        email,
        phone,
        picture
      } = userFound[0];

      // Stores returned user data on session
      session.user = {
        id,
        username,
        email,
        phone,
        picture
      };
      // Responds to client with ok status and user data on session
      return res.status(200).send(session.user);
    } else {
      // Responds to client with error status
      return res.status(401).send('Incorrect username or password');
    }
  },
  logout: (req, res) => {
    // Destroys user session
    req.session.destroy();
    // Responds to client with ok status
    return res.sendStatus(200);
  }
}