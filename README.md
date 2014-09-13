## Curriculum Flipper Bookmarklet

A little bookmarklet that flips between a given page in Jumpstart Lab's curriculum to it's source on Github and vice versa.

<a href="javascript:(function%20()%20{if%20(window.location.host%20===%20%27tutorials.jumpstartlab.com%27)%20{var%20github%20=%20%27https://github.com/JumpstartLab/curriculum/blob/master/source%27;var%20path%20=%20window.location.pathname.replace(%27html%27,%20%27markdown%27);window.location%20=%20github%20+%20path;}if%20(window.location.host%20===%20%27github.com%27)%20{var%20path%20=%20window.location.pathname.slice(43).replace(%27markdown%27,%20%27html%27);window.location%20=%20%27http://tutorials.jumpstartlab.com%27%20+%20path;}})();">JSL Flipper</a> ← Drag this up to your bookmarks bar.