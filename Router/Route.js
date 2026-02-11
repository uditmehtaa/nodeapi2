const express=require("express")
const nodemailer=require("nodemailer")
const router=express.Router();


const st=require('../controller/Student')
const tc=require('../controller/Teacher')
const co=require('../controller/Course')

router.get("/ejs", (req, res) => {
  res.render("index", {
    items: ["Apple", "Banana", "Mango"]
  });
});

router.get("/getdata",st.getstudentdata)
router.post("/postdata",st.insertstudentdata)
router.put("/putdata/:name",st.updatestudentdata)
router.delete("/deletedata/:name",st.deletestudentdata)

router.get("/gettcdata",tc.getteacherdata)
router.post("/posttcdata",tc.postteacherdata)
router.put("/puttcdata",tc.putteacherdata)
router.delete("/deletetcdata",tc.deleteteacherdata)

router.get("/getcodata",co.getcoursedata)
router.post("/postcodata",co.postcoursedata)
router.put("/putcodata",co.putcoursedata)
router.delete("/deletecodata",co.deletecoursedata)

router.post("/send-email", async (req, res) => {
  const { to, subject, text, html } = req.body;

  try {
    const info = await transporter.sendMail({
      from: "uditmehta00@gmail.com",
      to,
      subject,
      text,
      html,
    });

    res.status(200).json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
module.exports=router