// This is the script that I wrote and ran on http://en.wikipedia.org/wiki/List_of_DNS_record_types via the chrome console

var records = [];
$('table:first tbody tr').each(function(i, tr) {
   var kids = $(tr).children().toArray();
  records.push({
    type: $('div', kids[0]).attr('id'),
    decimal_value: parseInt($(kids[1]).text()),
    rfc: $(kids[2]).text(),
    description: $(kids[3]).text(),
    func: $(kids[4]).text(),
  
  });
});
JSON.stringify(records);
