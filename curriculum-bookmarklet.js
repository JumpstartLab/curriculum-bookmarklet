(function () {
  if (window.location.host === 'tutorials.jumpstartlab.com') {
    var github = 'https://github.com/JumpstartLab/curriculum/blob/master/source';
    var path = window.location.pathname.replace('html', 'markdown');
    window.location = github + path;
  }

  if (window.location.host === 'github.com') {
    var path = window.location.pathname.slice(43).replace('markdown', 'html');
    window.location = 'http://tutorials.jumpstartlab.com' + path;
  }
})();