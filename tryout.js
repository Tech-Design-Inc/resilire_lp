function doGet() {
    var toppage=HtmlService.createTemplateFromFile("contact");

    return toppage.evaluate();
}

function doPost(postdata){

    var sh=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var time=new Date();

    var company=postdata.parameters.company.toString();
    var name=postdata.parameters.name.toString();
    var email=postdata.parameters.email.toString();
    var num=postdata.parameters.num.toString();
    var message=postdata.parameters.message.toString();
    var longmessage=postdata.parameters.longmessage.toString();

    sh.appendRow([time,company, name, email, num, message, longmessage]);

    var resultpage=HtmlService.createTemplateFromFile("index");
    return resultpage.evaluate()
}