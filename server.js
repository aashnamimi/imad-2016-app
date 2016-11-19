var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

function add() {
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "invert");
    element.setAttribute("name", "button3");
    element.setAttribute("onclick", "foo()");
    document.flotta.appendChild(element);
    addPanel.setLayout(new BorderLayout());
addPanel.add(addButton,BorderLayout.SOUTH);
bottomLeft.setLayout(new GridLayout(1,3,200,0));
bottomLeft.add(addPanel);
}
  
  
  app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'coffeebeans.png'));
  });
  
  
 


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
