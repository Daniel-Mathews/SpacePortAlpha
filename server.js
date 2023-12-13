const app = require('./app')

const port = process.env.PORT || 3000
/* app.listen(port , (req,res)=>{
console.log('server started @ port ' + port)
})
*/


app.listen(port, function() {
    console.log(`Server started on port ${port}`);
  });
   