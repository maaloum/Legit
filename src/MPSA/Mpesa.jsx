const Mpesa = require("mpesa-node");
const mpesaApi = new Mpesa({
  consumerKey: "Dkc2An0dZ9YSfZMjcs4vINj2lW9mTuLz",
  consumerSecret: "8Ms28p9pAAxU8Q0R",
});
// another instance
// const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
mpesaApi
  .c2bSimulate(254111694164, 500, "h6dk0Ue2")
  .then((result) => {
    console.log("resulet")
  })
  .catch((err) => {
    // retry?
  });
