var tail = '</td></tr></table>>';

exports.config = {
  'factory': {
    head: '<<table bgcolor="darkseagreen2" border="0" cellborder="1" cellpadding="2" cellspacing="0">' +
           '<tr><td><b>factory</b></td></tr><tr><td>',
    tail: tail
    },

  'controller': {
    head: '<<table bgcolor="beige" border="0" cellborder="1" cellpadding="2" cellspacing="0">' +
           '<tr><td><b>controller</b></td></tr><tr><td>',
    tail: tail
    },

  'default': {
    head: '<<table bgcolor="white" border="0" cellborder="1" cellpadding="2" cellspacing="0">' +
           '<tr><td><b>default</b></td></tr><tr><td>',
    tail: tail
    }
};

