module.exports = {
  port: process.env.PORT || 8081, // declare the port
  db: { // seqlz related configuration
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite', // tell seqlz what type of db you're going to be connected to
      host: process.env.HOST || 'localhost', // tell seqlz the location of db you want to connect
      storage: './tabtracker.sqlite' // where to store your seqlz file
    }        
  }
}
