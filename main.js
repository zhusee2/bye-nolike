/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. */

if(typeof(pid)== "number"){ajaxget('forum.php?mod=viewthread&show=true&tid=' + tid + '&viewpid=' + pid, 'post_' + pid);}
else if (document.URL.match(/ideapit.net/)){
    change();
}
else if (!(document.URL.match(/?display=true/))){
    location.replace(document.URL+'?display=true');
}
