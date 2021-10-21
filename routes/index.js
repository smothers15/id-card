var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/card', function(req, res){
  console.log(req.body.dateOfBirth)
  res.render('card',{
    firstName: req.body.firstName||"James",
    lastName: req.body.lastName||"Smith",
    type: req.body.type,
    dateOfBirth: new Date(req.body.dateOfBirth),
    addressLine1: req.body.addressLine1||"123 Testing Street",
    addressLine2: req.body.addressLine2||"321 N West St",
    city: req.body.city||"Fresno",
    state: req.body.state||"CA",
    zip: req.body.zip||"123456",
    accountNumber: createAccountNumber(),
    currentDate: new Date(),
    cardClass: getCardClass(req.body.type),
    startDate: new Date(req.body.startDate)
  });
});

module.exports = router;



function createAccountNumber() {
  let accNum = ""
  for(let i = 0; i<5; i++){
    let temp = Math.floor(Math.random()*10)
    accNum += temp;
  }
  return accNum;
};


function getCardClass(type){
  if(type === "Premium"){
    return "premium"
  }else if(type === "Standard"){
    return "standard"
  }else if(type === "Bronze"){
    return "bronze"
  }else{
    return ""
  }
}
