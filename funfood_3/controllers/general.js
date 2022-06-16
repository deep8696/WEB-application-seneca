const express = require('express')
const router = express.Router();
const { signIn, signUp, menu, index} = require("./controllers");

// http://localhost/
router.get("/", index);

// http://localhost/signUp
router.get("/signUp", signUp);

// http://localhost/signIn
router.get("/signIn", signIn);

// http://localhost/menu
router.get("/menu", menu);

//signIn form for validation
router.post("/welcome", (req, res) => {

    console.log(req.body);

    const {firstName , lastName, email , password} = req.body;

    let flag = true;
    
    let emailFormat = /^\S+@\S+\.\S+$/; //regular expression for email
    let passFormat = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,14}$/; //password 


    //check for firstName 
    if (typeof firstName !== 'string' || firstName.trim().length === 0) {
        flag = false;
        res.render("signUp", {
            values: req.body,
            emptyF : "First name should not be empty"        
        }); 
    }
//check length for first name
    else if (typeof firstName !== 'string' || firstName.trim().length < 2) {
        flag = false;
        res.render("signUp", {
            values: req.body,
            shortF : "First name must have 2 or more than 2 characters.."        
        }); 
    }

     //check for lastName 
    else if (typeof lastName !== 'string' || lastName.trim().length === 0) {
        flag = false;
        res.render("signUp", {
            values: req.body,
            emptyL : "Last name should not be empty"        
        }); 
    }

    else if (typeof lastName !== 'string' || lastName.trim().length < 2) {
        flag = false;
        res.render("signUp", {
            values: req.body,
            shortL : "Last name must have more than 2 characters.."        
        }); 
    }
    
    //check for valid E-mail pattern and null 
    else if (emailFormat.test(email) == 0 || email.trim().length == 0) {
        flag = false;
        res.render("signUp", {
            values: req.body,
            emailF : "Enter valid E-mail Address"        
        }); 
    }
   
      
 //check password for the null entry
      else if(password.trim().length == 0){
        flag = false;
             res.render("signUp", {   
             values: req.body,      
             passwordE : "Password should not be empty !!"       
           }); 
        } 
      //check for valid password pattern 
      else if (passFormat.test(password) == 0 ) {
        flag = false;
             res.render("signUp", {
             values: req.body,
             passwordF : "Password must contain 8 characters,Upper and lower case ,special character and number.."        
           }); 
        }

        if(flag) {    
            
            const sgMail = require("@sendgrid/mail");
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
            const msg = {
                to: email,
                from: 'drpatel33@myseneca.ca',
                subject: 'Welcome to FunFood',
                html:
                    `
                     Full Name: ${firstName} ${lastName}<br>
                     Email Address: ${email}<br>

                     <h3>Welcome to FunFood</h3><h2> ${firstName},</h2><br>
                     <h3>Thank you for Joining FunFood..</h3><br>
                     You have successfully registered with the FunFood,<br>
                     Stay connected and enjoy delicious dishes!!<br>
                     <h3>Deep Patel<br>
                     FunFood</h3>
                     
                    `
            };
    
            sgMail.send(msg)
                .then(() => {

                    res.render("welcome", {                
                        values : req.body            
                        });
                })
                .catch(err => {
                    console.log(`Error ${err}`);
                    flag = false;
                    res.render("signUp", {
                        values: req.body,
                        failMail : "Sorry!! Registration is not Completed!! Please check the information carefully"        
                      }); 
                });              
        }

});




//signIn form for validation
router.post("/signIn", (req, res) => {
   
    console.log(req.body);

    const {loginEmail , passLogin} = req.body;

    let passed = true;    
    let emailFormat = /^\S+@\S+\.\S+$/; //regular expression for email
  

    //check for valid E-mail pattern and null 
    if (emailFormat.test(loginEmail) == 0 || loginEmail.trim().length == 0) {
        passed = false;
        res.render("signIn", {
            values: req.body,
            fMsg : "Enter valid E-mail Address"        
        }); 
    }
   
    //check for the null entry
   else if(passLogin.trim().length == 0){
            passed = false;
            res.render("signIn", {
                values: req.body,                
                fpass : "Enter valid password "       
            }); 
    } 

    //Successful login
    if(passed) { 
            res.render("signIn", {
            values: req.body,
            loginSuccess : "Login Successful !!!"            
        });
    }
});

module.exports = router;
